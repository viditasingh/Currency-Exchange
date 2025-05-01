# Currency Exchanger

A simple React application to convert currency values using live exchange rates.

## Features

- Convert between any two currencies
- Live exchange rates fetched from [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- Swap currencies with a single click
- Responsive and modern UI with Tailwind CSS

## Screenshots

![Currency Exchanger Screenshot](https://i.ibb.co/JWMDXN5P/Screenshot-2025-05-01-145255.png)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/currency-exchanger.git
    cd currency-exchanger
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
  components/
    InputBox.jsx
  hooks/
    useCurrencyInfo.js
  App.jsx
  App.css
```

## API

This app uses the [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for fetching live currency rates.

## Customization

- You can change the default currencies by editing the `from` and `to` state in `App.jsx`.
- The background image can be changed in the inline style of the main container in `App.jsx`.

## License

This project is for educational purposes.

---