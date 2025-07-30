document.getElementById("eco-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const transport = parseFloat(document.getElementById("transport").value);
  const electricity = parseFloat(document.getElementById("electricity").value);
  const meat = parseFloat(document.getElementById("meat").value);
  try {

    const response = await fetch("http://localhost:5001/api/emissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transport, electricity, meat })
    });
    const resultData = await response.json();
    document.getElementById("result").innerHTML = `
      <h3>🧾 Your Estimated Emissions:</h3>
      <p><strong>${resultData.totalEmission.toFixed(2)} kg CO₂</strong></p>
      <p>${getTip(resultData.totalEmission)}</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">Error connecting to backend.</p>`;
    console.error("Error:", error);
  }
});
function getTip(emission) {
  if (emission < 5) return "✅ Great job! You're eco-friendly today.";
  else if (emission < 15) return "♻️ Not bad! Try reducing meat or using public transport.";
  else return "⚠️ High emissions today. Consider energy-saving appliances and a plant-based diet.";
}
