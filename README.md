# Broadband Label Prototype (BBL)

A web-based broadband label prototype application for displaying internet service provider information and consumer broadband labels.

## Project Structure

```
broadbandlabel-prototype/
├── index.html              # Main entry point
├── startup.sh              # Application startup script
├── src/                    # Source code directory
│   ├── index.html          # Main application interface (42KB)
│   ├── .htaccess           # Apache configuration
│   ├── accessControl/      # Authentication and access control
│   │   ├── index.php       # Access control entry point
│   │   ├── admin_review.php# Admin review functionality
│   │   ├── request_access.php# Access request handling
│   │   ├── access_denied.html# Access denied page
│   │   └── whitelist.txt   # Access whitelist
│   └── static/             # Static assets
│       ├── package.json    # Node.js dependencies
│       ├── package-lock.json
│       └── dist/           # Built assets
│           └── js/
│               └── app.js  # Main JavaScript application (6.7KB)
└── bin/                    # Binary/installation files
    ├── install.sh          # Installation script
    └── src/                # Binary source files
```

## Features

- **Web Interface**: Comprehensive HTML interface for broadband label display
- **Access Control**: PHP-based authentication system with admin review
- **JavaScript Functionality**: Interactive features and dynamic content
- **Responsive Design**: Modern web interface optimized for various devices
- **Installation Scripts**: Automated setup and deployment tools

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP
- **Server**: Apache (with .htaccess configuration)
- **Package Management**: npm/Node.js

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cwaller96/BBL.git
   cd BBL
   ```

2. **Run the installation script:**
   ```bash
   chmod +x bin/install.sh
   ./bin/install.sh
   ```

3. **Start the application:**
   ```bash
   chmod +x startup.sh
   ./startup.sh
   ```

4. **Install dependencies (if needed):**
   ```bash
   cd src/static
   npm install
   ```

## Access Control

The application includes a robust access control system:

- **Whitelist Management**: Controlled access through `whitelist.txt`
- **Admin Review**: Administrative oversight of access requests
- **Request System**: Users can request access through the web interface
- **Access Denied Pages**: Proper error handling for unauthorized access

## Configuration

- Apache configuration is handled through `.htaccess`
- Access control settings can be modified in the `accessControl/` directory
- Static assets and build configuration in `src/static/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is a prototype for broadband label display and management.

---

**Note**: This is a prototype application. Please ensure proper security measures are in place before deploying to a production environment. 