import sys
import markdown
import subprocess
from pathlib import Path

md_pad = Path(sys.argv[1]).resolve()

with open(md_pad, encoding="utf-8", mode='r') as file:
    content = file.read()

html = markdown.markdown(content, extensions=["extra"])

title = md_pad.stem.capitalize()

pagina = f"""<!DOCTYPE html>
<html lang="nl">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap">
    <link rel="stylesheet" href="cozybrew.css">
    <title>{title}</title>
</head>
<body>
    <header>
      <img src="../../../images/cozybrew_logo.png" alt="Logo van CozyBrew" class="logo">
      <p class="tagline">Koffie, gebak & gezelligheid</p>
       <h1>{title}</h1>
    </header>
    <main>

        {html}
    </main>
</body>
</html>
"""

with open("test.html", encoding="utf-8", mode='w') as file:
    file.write(pagina)

print("Markdown file converted to HTML successfully.")

edge = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
html_pad = Path("test.html").resolve()
pdf_pad = md_pad.with_suffix(".pdf")

subprocess.run([edge, "--headless", "--no-pdf-header-footer", f"--print-to-pdf={pdf_pad}", html_pad])

print("PDF gegenereerd met succes.")