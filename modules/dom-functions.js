// Module for DOM functions

export const toggleButton = element => {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }

}

// Syntax for exporting the individual functions you need from this module/file
// export { toggleButton }