
/**
 * Represents a company
 */
class Company {
    public ID: number;
    public Name: string;
    public Address: string;
    public City: string;
    public Phone: string;
    public Zip: string;
    public Misc: string;
}

/**
 * Represents a company's quote
 */
class Quote {
    public ID: number;
    public Name: string;
    public Date: Date;
    public Lines: QuoteLine[];
}

/**
 * Represents a detail line of a quote
 */
class QuoteLine {
    public ID: number;
    public Display: number;
    public UNIT: string;
    public COST: number;
    public DESC: string;
    public IsCentered: boolean;
}

/**
 * Represents a contact inside a company
 */
class Contact {
    public ID: number;
    public Name: string;
    public Phone: string;
    public Email: string;
    public Position: string;
    public Notes: Note[];
}

/**
 * Represents a note written about a contact
 */
class Note {
    public ID: number;
    public Date: Date;
    public Title: string;
    public Text: string;
}