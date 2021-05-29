'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('change', handleChange));

function handleChange() {
  console.log(this.value);
  const unit = this.dataset.unit || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}
