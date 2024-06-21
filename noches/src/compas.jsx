import { useState } from "react";

export const Amiguo = () => {
  const [am, setAm] = useState("");
  const [buscarAm, setBuscarAm] = useState("");

  const condicional = (nombre) => {
    if (nombre === "zaca") {
      return "judio, el horno te extraña";
    } else if (nombre === "raul") {
      return " a cuanto la paloma? ";
    } else if (nombre === "zacarias") {
      return "que nombre mas judio por dios xd";
    } else if (nombre === "raulex") {
      return "peruano";
    } else if (nombre === "santy") {
      return "la prima de nahu es de todos";
    } else if (nombre === "santiago") {
      return "hay una prima a 1km , transformate en satiagueño nivel dios";
    } else if (nombre === "nahu") {
      return "tu prima es de todos";
    } else if (nombre === "nahuel") {
      return "la mona jimenez";
    } else if (nombre === "lucio") {
      return "peroncho come polenta";
    } else if (nombre === "lucho") {
      return "aguante milei! lokita";
    } else if (nombre === "fer") {
      return "chee mosca, posta estuviste en pricion? siempre me quedo la duda xd";
    } else if (nombre === "julio") {
      return "cuando zaca se duerma le volvemos a dibujar un chota xd";
    } else if (nombre === "quimey") {
      return "cual es tu TRANSformer favorito?";
    } else if (nombre == "gabriel") {
      return "como se drogaba fede lpm jajaajaj";
    } else if (nombre === "chino") {
      return "lee este chisme de zaca rapido y en voz alta *zaca estaba en el cuarto de lucho soy gay y me la como completa * nose si lo hiciste, pero si es asi jajaja. ponete como lokita";
    } else "escribi bien tu nombre lcdth";
  };

  const buscar = (valor) => {
    setBuscarAm(valor.target.value);
  };

  const buttonBuscador = () => {
    const response = buscarAm.trim();
    const respo = condicional(response);
    setAm(respo);
  };

  return (
    <>
      <input
        onChange={buscar}
        placeholder="pone tu nombre lokita"
        type="text"
      />
      <button onClick={buttonBuscador}>buscar</button>
      <br />
      <h3>{am}</h3>
    </>
  );
};
