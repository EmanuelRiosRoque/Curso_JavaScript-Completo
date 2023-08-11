const diaHoy = new Date(); 
// MomentoJs

moment.locale('es')
                            //Mes dia Año hora:minutos:segundos
console.log(moment().format('MMMM Do YYYY h:mm:ss'));


console.log(moment().format('LLLL', diaHoy));
console.log(moment().add(3, 'days').calendar());

// Para trabajar con las fechas utilizar moment
