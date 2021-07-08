export interface Page {
  name: string;       // The name of the page, used in the Repo page combobox
  titlePage: string;  // the H1 content that starts the page
  titleTab: string;   // the browser tab prefix for this item  
  body: string;       // page content for the selected item
  category: string;   // data category
}
