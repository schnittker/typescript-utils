/**
 * @author Markus Schnittker
 */
export class StringUtils {
  /**
   * <p>Checks if the string contains only Unicode letters or digits.</p>
   *
   * <p>{@code null} will return {@code false}.
   * An empty sring (length()=0) will return {@code false}.</p>
   *
   * <pre>
   * StringUtils.isAlphanumeric(null)   = false
   * StringUtils.isAlphanumeric("")     = false
   * StringUtils.isAlphanumeric("  ")   = false
   * StringUtils.isAlphanumeric("abc")  = true
   * StringUtils.isAlphanumeric("ab c") = false
   * StringUtils.isAlphanumeric("ab2c") = true
   * StringUtils.isAlphanumeric("ab-c") = false
   * </pre>
   *
   * @param str  the string to check, may be null
   * @return {@code true} if only contains letters or digits,
   *  and is non-null
   */
  public static isAlphanumeric(str: string): boolean {
    if (this.isEmpty(str)) {
      return false;
    }
    const sz: number = str.length;
    for (let i = 0; i < sz; i++) {
      if (!Character.isLetterOrDigit(str.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  /**
   * <p>Checks if a CharSequence is empty (""), null or whitespace only.</p>
   *
   * <pre>s
   * StringUtils.isBlank(null)      = true
   * StringUtils.isBlank(undefined) = true
   * StringUtils.isBlank("")        = true
   * StringUtils.isBlank(" ")       = true
   * StringUtils.isBlank("bob")     = false
   * StringUtils.isBlank("  bob  ") = false
   * </pre>
   *
   * @param str  the string to check, may be null
   * @returns {@code true} if the string is null, empty or whitespace only
   */
  public static isBlank(str: string): boolean {
    if (str === undefined || str === null) {
      return true;
    }
    const strLen: number = str.length;
    if (strLen === 0) {
      return true;
    }
    for (let i = 0; i < str.length; i++) {
      if (!Character.isWhitespace(str.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  /**
   * <p>Checks if a string is empty ("") or null.</p>
   *
   * <pre>
   * StringUtils.isEmpty(null)      = true
   * StringUtils.isEmpty(undefined) = true
   * StringUtils.isEmpty("")        = true
   * StringUtils.isEmpty(" ")       = false
   * StringUtils.isEmpty("bob")     = false
   * StringUtils.isEmpty("  bob  ") = false
   * </pre>
   *
   * @param str  the string to check, may be null
   * @returns {@code true} if the string is empty or null
   */
  public static isEmpty(str: string | null): boolean {
    return str === null || str.length === 0 || str === undefined;
  }

  /**
   * <p>Checks if the string contains only Unicode digits.
   * A decimal point is not a Unicode digit and returns false.</p>
   *
   * <p>{@code null} will return {@code false}.
   * An empty string (length === 0) will return {@code false}.</p>
   *
   * <p>Note that the method does not allow for a leading sign, either positive or negative.
   * Also, if a String passes the numeric test, it may still generate a NumberFormatException
   * when parsed by Integer.parseInt or Long.parseLong, e.g. if the value is outside the range
   * for int or long respectively.</p>
   *
   * <pre>
   * StringUtils.isNumeric(null)   = false
   * StringUtils.isNumeric("")     = false
   * StringUtils.isNumeric("  ")   = false
   * StringUtils.isNumeric("123")  = true
   * StringUtils.isNumeric("\u0967\u0968\u0969")  = true
   * StringUtils.isNumeric("12 3") = false
   * StringUtils.isNumeric("ab2c") = false
   * StringUtils.isNumeric("12-3") = false
   * StringUtils.isNumeric("12.3") = false
   * StringUtils.isNumeric("-123") = false
   * StringUtils.isNumeric("+123") = false
   * </pre>
   *
   * @param str  the string to check, may be null
   * @return {@code true} if only contains digits, and is non-null
   */
  public static isNumeric(str: string): boolean {
    if (this.isEmpty(str)) {
      return false;
    }
    const sz: number = str.length;
    for (let i = 0; i < sz; i++) {
      if (!Character.isDigit(str.charAt(i))) {
        return false;
      }
    }
    return true;
  }

  /**
   * <pre>
   * </pre>
   *
   * @param str the string to check, may be null
   * @param seq the search string
   * @return {@code true} if str contains the search string str
   */
  public static contains(str: string, seq: string): boolean {
    return str.indexOf(seq) >= 0;
  }

  public static getNumericPart(str: string) {
    return str.replace(/[^\d\.,]/g,'');
  }

  public static hasMatched(str: string, regex: RegExp): boolean {
    return regex.test(str);
  }
}

/**
 * Helper class for character
 */
class Character {
  /**
   *
   * @param str
   */
  public static isDigit(str: string): boolean {
    return ((str != null) && (str !== '') && !isNaN(Number(str.toString())));
  }

  /**
   *
   * @param str
   */
  public static isLetterOrDigit(str: string): boolean {
    // @ts-ignore
    return str.match(/[\d\w]/i).length > 0;
  }

  /**
   * <p>Checks if a string has a white space</p>
   *
   * <pre>
   * StringUtils.isWhitespace(' ')    = true
   * StringUtils.isWhitespace('')     = false
   * </pre>
   *
   * @param str the string to check
   * @returns {@code true} if the string has a white space
   */
  public static isWhitespace(str: string): boolean {
    return str === ' ';
  }
}
