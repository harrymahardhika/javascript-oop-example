/**
 * Formats the given amount into a currency string.
 *
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount)
}

/**
 * Formats the given name based on the gender.
 *
 * @param {string} name - The name to be formatted.
 * @param {string} gender - The gender of the person.
 * @returns {string} The formatted name.
 */
export function formatName(name, gender) {
  return gender === 'male' ? `Mr ${name}` : `Mrs ${name}`
}
