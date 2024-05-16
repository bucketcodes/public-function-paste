/**
 * Clean a list of values, removing extra whitespace, newlines, and commas
 *
 * @param {string} value The list to clean, can be comma separated or newline separated
 * @param {boolean=} pretty add new line after each comma. Default is false
 * @returns {string}
 * The cleaned string, comma separated "123456,123123,123123" or pretty "123456,\n123123,\n123123"
 */
const cleanList = (value, pretty = false) => {
    /**
     * Ways someone might enter a list
     * - 123456, 123456
     * - 123456,123456
     * - 123456\n123456
     * - 123456, 123456,
     *
     * Convert that into this format (No trailing comma)
     * - 123456,123123,123123
     */
    value = value.replace(/, /g, ',')
    value = value.replace(/,/, ',')
    value = value.replace(/\n/g, ',')
    value = value.replace(/,$/, '')
  
    // Make sure that there are no extra commas ie: 123132,,123132
    value = value.replace(/,,/g, ',')
  
    if (pretty) {
      value = value.replace(/,/g, ',\n')
    }
  
    return value
  }
  
  export { cleanList }
  