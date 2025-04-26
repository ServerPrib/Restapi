
function acceptRules() {
  document.querySelector('.rules-section').style.display = 'none';
  document.getElementById('welcomeScreen').style.display = 'block';
}

function showProductSection() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('productSection').style.display = 'block';
}

function backToWelcome() {
  location.reload();
}

function showPaymentForm() {
  const selected = document.getElementById('produkSelect').value;
  if (!selected) return;
  const [paket, harga] = selected.split('|');
  document.getElementById('productSection').style.display = 'none';
  document.getElementById('paymentForm').style.display = 'block';
}

function startPayment() {
  const email = document.getElementById('email').value;
  if (!email) return alert("Email wajib diisi!");
  document.getElementById('qrSection').style.display = 'block';
  const qr = "https://via.placeholder.com/200?text=QRIS";
  document.getElementById('qrImage').src = qr;
  document.getElementById('qrImageUrl').innerText = qr;
}
