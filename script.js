// script.js

const blockchainData = {
    "Ethereum 2.0": { decentralization: 90, scalability: 70, security: 95 },
    "Polkadot": { decentralization: 80, scalability: 85, security: 90 },
    "Solana": { decentralization: 60, scalability: 95, security: 75 },
    "Avalanche": { decentralization: 80, scalability: 90, security: 85 },
    "Cosmos": { decentralization: 85, scalability: 85, security: 80 },
    "Bitcoin": { decentralization: 95, scalability: 40, security: 99 },
  };
  
  const charts = {
    decentralization: document.querySelector("#chart-decentralization .progress"),
    scalability: document.querySelector("#chart-scalability .progress"),
    security: document.querySelector("#chart-security .progress"),
  };
  
  const values = {
    decentralization: document.getElementById("decentralization-value"),
    scalability: document.getElementById("scalability-value"),
    security: document.getElementById("security-value"),
  };
  
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const blockchain = button.getAttribute("data-blockchain");
      const data = blockchainData[blockchain];
  
      Object.keys(charts).forEach(key => {
        const value = data[key];
        const offset = 502.4 - (502.4 * value) / 100;
  
        charts[key].style.strokeDashoffset = offset;
        values[key].textContent = `${value}%`;
      });
    });
  });
  