# RecycleNXT App Requirements

## Overview
RecycleNXT is a sustainability-focused mobile app that allows users to purchase eco-friendly bags, donate plastic or glass waste for rewards, and track their environmental impact. The app aims to promote sustainable practices through a reward system called TerraTokens.

## App Screens and Features

### 1. Home & Shop Section
- **Home Screen**:
  - Clean, minimal design
  - Banners for eco-tips, offers, and sustainability news
  - Navigation to other app sections

- **Product Catalog**:
  - Dense brand bags (backpacks, totes, laptop sleeves)
  - Product display with images, prices, and short descriptions
  - Category filters for easy navigation
  - "Add to Cart" and "Buy Now" buttons for each product

- **Checkout Process**:
  - Shopping cart review
  - Option to apply TerraTokens for up to 25% discount
  - Payment processing
  - Order confirmation

### 2. Donate Waste Feature
- **Donation Screen**:
  - Selection between plastic or glass bottles
  - Minimum donation requirement: 20 bottles
  - Photo upload functionality (1-3 photos)
  - Pickup location input
  - Time slot selection (3 options)

- **Confirmation Screen**:
  - Display "Pickup Scheduled" status
  - Summary of donation details
  - Addition to donation history

### 3. TerraTokens Wallet
- **Wallet Screen**:
  - Current TerraTokens balance
  - Token earning history log
  - "Use Tokens" button for checkout
  - Tooltip explaining "1 token = ₹1"

### 4. User Profile & Impact Tracker
- **Profile Page**:
  - User name and profile photo
  - Summary statistics:
    - Total Tokens Earned
    - Waste Donated
    - Products Bought
  
- **History Sections**:
  - Past Orders with dates and items
  - Donation History with dates, bottle count, and donation type
  
- **Impact Tracker**:
  - Visual representation of environmental impact
  - Symbolic traceability (e.g., "Your donations helped make 2 backpacks")
  - Recycling metrics (e.g., "20 bottles recycled into fabric")

## Design Guidelines
- Soft colors and rounded edges
- Friendly font similar to Headspace
- Donation flow similar to Swiggy or BigBasket
- Wallet design inspired by Cred or Duolingo points systems
- Beginner-friendly UX with clear icons and visual cues
- Mobile-responsive design

## Data Models

### User Model
- User ID
- Name
- Profile Photo
- TerraTokens Balance
- Total Waste Donated
- Total Products Purchased

### Product Model
- Product ID
- Name
- Category
- Price
- Description
- Images
- Stock Status

### Donation Model
- Donation ID
- User ID
- Donation Type (Plastic/Glass)
- Bottle Count
- Photos
- Pickup Location
- Pickup Time Slot
- Status
- Date
- Tokens Earned

### Order Model
- Order ID
- User ID
- Products (with quantity)
- Total Amount
- Tokens Applied
- Discount Amount
- Final Amount
- Order Status
- Order Date

### Transaction Model
- Transaction ID
- User ID
- Type (Earning/Redemption)
- Amount (Tokens)
- Source (Donation/Purchase)
- Reference ID (Donation ID/Order ID)
- Date

## Navigation Flow
1. App opens to Home Screen
2. From Home, users can navigate to:
   - Shop
   - Donate Waste
   - TerraTokens Wallet
   - User Profile
3. From Shop, users can:
   - Browse products
   - View product details
   - Add to cart
   - Proceed to checkout
4. From Donate Waste, users can:
   - Select waste type
   - Upload photos
   - Enter pickup details
   - Confirm donation
5. From TerraTokens Wallet, users can:
   - View balance and history
   - Navigate to Shop to use tokens
6. From User Profile, users can:
   - View impact statistics
   - Check order history
   - Review donation history

## Technology Stack
- Frontend: React Native for cross-platform mobile development
- UI Framework: React Native Paper for consistent design components
- State Management: Redux for managing application state
- Navigation: React Navigation for screen transitions
- Image Handling: React Native Image Picker for photo uploads
- Storage: AsyncStorage for local data persistence
- Animations: React Native Animated for smooth UI transitions
