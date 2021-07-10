export interface Repository {
  name: string;
  url: string;
  description: string;
}
export interface Page {
  name: string;       // The name of the page, used in the Repo page combobox
  titlePage: string;  // the H1 content that starts the page
  titleTab: string;   // the browser tab prefix for this item  
  body: string;       // page content for the selected item
  repositories: Repository[];
}

export const emptyPage = {
  name: '',
  titlePage: '',
  titleTab: '',
  body: '',
  repositories: []
}