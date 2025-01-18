import React, { useState } from "react";

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí puedes agregar lógica para enviar los datos al servidor o procesarlos
  };

  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
      <h2>Formulario de Tarjeta de Crédito</h2>

      <div className="form-group">
        <label htmlFor="cardNumber">Número de Tarjeta</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          maxLength="16"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardHolder">Nombre del Titular</label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          placeholder="John Doe"
          value={formData.cardHolder}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de Vencimiento</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            maxLength="5"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            maxLength="3"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Pagar
      </button>
    </form>
  );
};

export default CreditCardForm;
