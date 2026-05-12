import pdfplumber
import sys

pdf_path = "/workspace/app-bl3tps3sao01/tasks/XCP内部培训资料（全文）.pdf"
output_path = "/workspace/app-bl3tps3sao01/tasks/extracted_content.txt"

try:
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                full_text += text + "\n"
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(full_text)
    print(f"Successfully extracted text to {output_path}")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
