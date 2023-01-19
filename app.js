function barcodeGen() {
  const data = document.querySelector(".input").value;
  JsBarcode("#barcode", data, {
    background: "#ffff",
    color: "#f1f1f1",
    height: 100,
    displayValue: false,
  });
}
