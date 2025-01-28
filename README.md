# Dog Image Gallery

## Project Overview

The Dog Image Gallery is a React-based web application that showcases random dog images fetched from the Dog API. This project demonstrates the implementation of a responsive image gallery with interactive features such as a background color picker and a modal view for larger image display.

## Features

- Fetches and displays random dog images in a responsive grid layout.
- Allows users to pick the background color of each image.
- Provides a modal view for larger image display with color customization.
- Synchronizes background color changes between gallery and modal views.
- Implements loading state while fetching images.

## Technologies Used

- **React** (useEffect, useState, useCallback)
- **Tailwind CSS** for styling.
- **Dog API** (https://dog.ceo/dog-api/) for fetching random dog images.

## How It Works

1. The app fetches 12 random dog images using the Dog API.
2. Each image is displayed in a responsive grid layout.
3. Clicking on an image opens it in a larger modal view, where users can:
   - Pick the image's background color using a color picker.
   - Close the modal by clicking outside it or pressing the Escape key.

## Deployment

The app is live! Check it out here: [Deployed Link](https://wingardium-proj.vercel.app/)  

---

### Screenshot:

![Dog Image Gallery Preview](#)  
