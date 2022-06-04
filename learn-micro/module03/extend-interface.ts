interface Persona {
  nombre: string;
  edad: number;
  estado: boolean;
}

const juan: Persona = {
  nombre: 'Juan',
  edad: 25,
  estado: true,
};

interface Trabajador extends Persona {
  contrato: 'FullTime' | 'PartTime' | 'PeakTime' | 'Ex-empleado';
  vacaciones?: boolean;
  estado: boolean;
}

const pedro: Trabajador = {
  nombre: 'Pedro',
  edad: 35,
  estado: true,
  contrato: 'PartTime',
  vacaciones: true,
};

const diego: Trabajador = {
  nombre: 'Diego',
  edad: 67,
  estado: false,
  contrato: 'Ex-empleado',
};

const estaVivo = (persona: Persona) => {
  if (persona.estado) return `${persona.nombre} está vivo!`;
  return `${persona.nombre} lamentablemente no está vivo`;
};

console.log(estaVivo(juan));
console.log(estaVivo(pedro));
console.log(estaVivo(diego));
