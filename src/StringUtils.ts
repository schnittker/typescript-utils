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
     * @param cs  the string to check, may be null
     * @return {@code true} if only contains letters or digits,
     *  and is non-null
     */
    public static isAlphanumeric(cs: string): boolean {
        if (this.isEmpty(cs)) {
            return false;
        }
        const sz: number = cs.length;
        for (var i = 0; i < sz; i++) {
            if (!Character.isLetterOrDigit(cs.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    /**
     * <p>Checks if a CharSequence is empty (""), null or whitespace only.</p>
     *
     * <pre>
     * StringUtils.isBlank(null)      = true
     * StringUtils.isBlank("")        = true
     * StringUtils.isBlank(" ")       = true
     * StringUtils.isBlank("bob")     = false
     * StringUtils.isBlank("  bob  ") = false
     * </pre>
     *
     * @param cs  the string to check, may be null
     * @returns {@code true} if the string is null, empty or whitespace only
     */
    public static isBlank(cs: string): boolean {
        const strLen: number = cs.length;
        if (strLen === 0) {
            return true;
        }
        for (var i = 0; i < cs.length; i++) {
            if (!Character.isWhitespace(cs.charAt(i))) {
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
     * StringUtils.isEmpty("")        = true
     * StringUtils.isEmpty(" ")       = false
     * StringUtils.isEmpty("bob")     = false
     * StringUtils.isEmpty("  bob  ") = false
     * </pre>
     *
     * @param cs  the string to check, may be null
     * @returns {@code true} if the string is empty or null
     */
    public static isEmpty(cs: string|null): boolean {
        return cs === null || cs.length === 0;
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
     * @param cs  the string to check, may be null
     * @return {@code true} if only contains digits, and is non-null
     */
    public static isNumeric(cs: string): boolean {
        if (this.isEmpty(cs)) {
            return false;
        }
        const sz: number = cs.length;
        for (var i = 0; i < sz; i++) {
            if (!Character.isDigit(cs.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}

/**
 * Helper class for character
 */
class Character {
    /**
     * 
     * @param cs 
     */
    public static isDigit(cs: string): boolean {
        return ((cs != null) && (cs !== '') && !isNaN(Number(cs.toString())));
    }

    /**
     * 
     * @param cs 
     */
    public static isLetterOrDigit(cs: string): boolean {
        return cs.match(/[\d\w]/i).length > 0;
    }

    /**
     * <p>Checks if a string has a white space</p>
     * 
     * <pre>
     * StringUtils.isWhitespace(' ')    = true
     * StringUtils.isWhitespace('')     = false
     * </pre>
     * 
     * @param cs the string to check
     * @returns {@code true} if the string has a white space
     */
    public static isWhitespace(cs: string): boolean {
        return cs === ' ';
    }
}