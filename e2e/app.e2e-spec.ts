import { RecipeWebsitePage } from './app.po';

describe('recipe-website App', () => {
  let page: RecipeWebsitePage;

  beforeEach(() => {
    page = new RecipeWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
