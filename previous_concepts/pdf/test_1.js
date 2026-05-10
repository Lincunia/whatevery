
//'@ironsoftware/ironpdf'

async function generarPDF() {
  const pdf = await PdfDocument.fromHtml(`
    <div id="element-to-print">
      <h1>Mi PDF generado</h1>
      <p>Este es el contenido que quiero exportar</p>
    </div>
  `);
  
  await pdf.saveAs('myfile.pdf');
}

generarPDF();
