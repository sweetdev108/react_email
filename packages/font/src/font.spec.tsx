import { Font } from "./index";
import { render } from "@react-email/render";

describe("render", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it("renders the <Font> component", () => {
    const actualOutput = render(
      <Font fontFamily="Roboto" fallbackFontFamily={"Verdana"} />,
    );
    expect(actualOutput).toMatchInlineSnapshot(`
      "<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><style>
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            mso-font-alt: 'Verdana';
            
          }

          * {
            font-family: 'Roboto', Verdana;
          }
        </style>"
    `);
  });
});
