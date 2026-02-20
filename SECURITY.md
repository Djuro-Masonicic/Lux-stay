# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please email security@luxstay.com or open a private security advisory on GitHub.

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work on a fix promptly.

## Security Best Practices

When deploying this application:

1. **Environment Variables**: Never commit `.env.local` files
2. **API Keys**: Store all API keys in environment variables
3. **HTTPS**: Always use HTTPS in production
4. **Dependencies**: Keep dependencies updated (`npm audit fix`)
5. **Authentication**: Implement proper authentication for booking system
6. **Input Validation**: Validate all user inputs
7. **Rate Limiting**: Implement rate limiting on forms
8. **CORS**: Configure CORS properly for your API

## Known Security Considerations

This is a frontend demo project. For production use:
- Implement backend API for bookings
- Add authentication and authorization
- Implement CSRF protection
- Add rate limiting
- Sanitize all user inputs
- Use secure payment gateways
- Implement proper session management

Thank you for helping keep LuxStay secure!
