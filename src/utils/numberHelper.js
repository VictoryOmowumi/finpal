/**
 * Formats a number with commas for thousands, millions, etc.
 * @param {string | number} value - The number to format.
 * @returns {string} - The formatted number as a string.
 */
export const formatNumber = (value) => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas
  };
  
  /**
   * Removes formatting (commas) from a formatted number.
   * @param {string} value - The formatted number as a string.
   * @returns {string} - The raw number as a string.
   */
  export const unformatNumber = (value) => {
    return value.replace(/,/g, ''); // Remove commas
  };