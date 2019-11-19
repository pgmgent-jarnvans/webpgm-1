const generateGUID = n => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let guid = '', output = '';

  while (guid.length < n) {
    const position = Math.floor(Math.random() * charactersLength);
    const randomChar = characters.charAt(position);
    guid += randomChar;
  } 

  output = ` 
    ======================================================
    Global Unique Identifier (GUID)
    ======================================================
    Size: ${n}
    ------------------------------------------------------
    The generated GUID is "${guid}"
    ======================================================
  `

  return output;
}

console.log(generateGUID(8));
console.log(generateGUID(24));