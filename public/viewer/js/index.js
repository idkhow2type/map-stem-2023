const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
const image = document.createElement('img');
image.src = 'map.png';
canvas.width = image.width;
canvas.height = image.height;