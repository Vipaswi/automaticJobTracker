export const sampleMessageEmailFailures = [
  {
    "id": "18c2a9f1b3e4d5c6",
    "threadId": "18c2a9f1b3e4d5c6",
    "labelIds": ["UNREAD", "INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Thank you for your interest in the Software Engineer position at TechCorp. We regret to inform you that we have decided to move forward with other candidates.",
    "historyId": "12345",
    "internalDate": "1720473600000", // July 8, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "multipart/alternative",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@techcorp.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Update on Your Application for Software Engineer" },
        { "name": "Date", "value": "Mon, 08 Jul 2024 08:00:00 -0400" }
      ],
      "body": {
        "size": 0 // In a real API response, this would indicate size, content would be in parts
      },
      "parts": [
        {
          "partId": "0",
          "mimeType": "text/plain",
          "filename": "",
          "headers": [
            { "name": "Content-Type", "value": "text/plain; charset=\"UTF-8\"" },
            { "name": "Content-Transfer-Encoding", "value": "quoted-printable" }
          ],
          "body": {
            "size": 178, // Corrected size for the plain text content
            "data": "VGhpcyBpcyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBqb2IgcmVqZWN0aW9uIGVtYWlsIGZyb20gVGVjaENvcnAuIFdlIGFwcHJlY2lhdGUgeW91ciBpbnRlcmVzdCBhbmQgYXBwbGljYXRpb24uIFVuZm9ydHVuYXRlbHksIHdlIGhhdmUgZGVjaWRlZCB0byBtb3ZlIGZvcndhcmQgd2l0aCBvdGhlciBjYW5kaWRhdGVzIGF0IHRoaXMgdGltZS4gV2Ugd2lzaCB5b3UgdGhlIGJlc3QgaW4geW91ciBqb2Igc2VhcmNoIQ==" // Correct Base64 encoded for "This is the text content of the job rejection email from TechCorp. We appreciate your interest and application. Unfortunately, we have decided to move forward with other candidates at this time. We wish you the best in your job search!"
          }
        },
        {
          "partId": "1",
          "mimeType": "text/html",
          "filename": "",
          "headers": [
            { "name": "Content-Type", "value": "text/html; charset=\"UTF-8\"" },
            { "name": "Content-Transfer-Encoding", "value": "quoted-printable" }
          ],
          "body": {
            "size": 204, // Corrected size for the HTML content
            "data": "PHA+VGhhbmsgZm9yIHlvdXIgZGVkaWNhdGlvbiB0byB0aGUgU29mdHdhcmUgRW5naW5lZXIgZXZlbnQgcG9zaXRpb24gYXQgVGVjaENvcnAuIFdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgd2UgaGF2ZSBkZWNpZGVkIHRvIG1vdmUgZm9yd2FyZCB3aXRoIG90aGVyIGNhbmRpZGF0ZXMuPC9wPjxwPldlIHdpc2ggeW91IHRoZSBiZXN0IGluIHlvdXIgZnV0dXJlIGVuZGVhdm91cnMhPC9wPg==" // Correct Base64 encoded HTML for "<p>Thank for your dedication to the Software Engineer event position at TechCorp. We regret to inform you that we have decided to move forward with other candidates.</p><p>We wish you the best in your future endeavours!</p>"
          }
        }
      ]
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c2b0e2c1f3a4b5",
    "threadId": "18c2b0e2c1f3a4b5",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "We appreciate your application for the Product Manager role at Innovate Solutions. While your qualifications are impressive, we have selected another candidate.",
    "historyId": "12346",
    "internalDate": "1720560000000", // July 9, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@innovatesolutions.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Application to Innovate Solutions" },
        { "name": "Date", "value": "Tue, 09 Jul 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 194, // Corrected size
        "data": "V2UgYXBwcmVjaWF0ZSB5b3VyIGFwcGxpY2F0aW9uIGZvciB0aGUgUHJvZHVjdCBNYW5hZ2VyIHJvbGUgYXQgSW5ub3ZhdGUgU29sdXRpb25zLiBXaGlsZSB5b3VyIHF1YWxpZmljYXRpb25zIGFyZSBpbXByZXNzaXZlLCB3ZSBoYXZlIHNlbGVjdGVkIGFub3RoZXIgY2FuZGlkYXRlIHRoYXQgbW9yZSBjbG9zZWx5IG1hdGNoZXMgb3VyIGN1cnJlbnQgbmVlZHMuIFdlIHdpc2ggeW91IHRoZSBiZXN0IGluIHlvdXIgZnV0dXJlIGVuZGVhdm91cnMu" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 1000,
    "raw": ""
  },
  {
    "id": "18c2c1a3b2c4d5e6",
    "threadId": "18c2c1a3b2c4d5e6",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Following your interview for the Data Scientist position, we have decided not to proceed with your application at this time.",
    "historyId": "12347",
    "internalDate": "1720646400000", // July 10, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruiting@globaldata.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Data Scientist Application Update" },
        { "name": "Date", "value": "Wed, 10 Jul 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 154, // Corrected size
        "data": "Rm9sbG93aW5nIHlvdXIgaW50ZXJ2aWV3IGZvciB0aGUgRGF0YSBTY2llbnRpc3QgcG9zaXRpb24sIHdlIGhhdmUgZGVjaWRlZCBub3QgdG8gcHJvY2VlZCB3aXRoIHlvdXIgYXBwbGljYXRpb24gYXQgdGhpcyB0aW1lLiBXZSB0aGFuayB5b3UgZm9yIHlvdXIgZWZmb3J0IGFuZCBjb25zaWRlcmF0aW9uLg==" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c2d2b4c3d5e6f7",
    "threadId": "18c2d2b4c3d5e6f7",
    "labelIds": ["INBOX"],
    "snippet": "Thank you for applying to the Marketing Specialist role at Creative Minds. Unfortunately, we're not able to move forward with your candidacy.",
    "historyId": "12348",
    "internalDate": "1720732800000", // July 11, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@creativeminds.org" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Regarding Your Marketing Specialist Application" },
        { "name": "Date", "value": "Thu, 11 Jul 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 150, // Corrected size
        "data": "VGhhbmsgZm9yIGFwcGx5aW5nIHRvIHRoZSBNYXJrZXRpbmcgU3BlY2lhbGlzdCByb2xlIGF0IENyZWF0aXZlIE1pbmRzLiBVbmZvcnR1bmF0ZWx5LCB3ZSdyZSBub3QgYWJsZSB0byBtb3ZlIGZvcndhcmQgd2l0aCB5b3VyIGNhbmRpZGFjeSBhdCB0aGlzIHRpbWUu" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 850,
    "raw": ""
  },
  {
    "id": "18c2e3c5d4e6f7a8",
    "threadId": "18c2e3c5d4e6f7a8",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "We appreciate your interest in the Financial Analyst position at CapitalCorp. We regret to inform you that you have not been selected for an interview.",
    "historyId": "12349",
    "internalDate": "1720819200000", // July 12, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@capitalcorp.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Financial Analyst Application Status" },
        { "name": "Date", "value": "Fri, 12 Jul 2024 13:00:00 -0400" }
      ],
      "body": {
        "size": 174, // Corrected size
        "data": "V2UgYXBwcmVjaWF0ZSB5b3VyIGludGVyZXN0IGluIHRoZSBGaW5hbmNpYWwgQW5hbHlzdCBwb3NpdGlvbiBhdCBDYXBpdGFsQ29ycC4gV2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3UgaGF2ZSBub3QgYmVlbiBzZWxlY3RlZCBmb3IgYW4gaW50ZXJ2aWV3IGF0IHRoaXMgdGltZS4=" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 950,
    "raw": ""
  },
  {
    "id": "18c2f4d6e5f7a8b9",
    "threadId": "18c2f4d6e5f7a8b9",
    "labelIds": ["INBOX"],
    "snippet": "Thank you for applying to the UX Designer role at UserFirst. We've moved forward with candidates whose experience aligns more closely with our needs.",
    "historyId": "12350",
    "internalDate": "1720905600000", // July 13, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@userfirst.design" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Update on Your UX Designer Application" },
        { "name": "Date", "value": "Sat, 13 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 178, // Corrected size
        "data": "VGhhbmsgZm9yIGFwcGx5aW5nIHRvIHRoZSBVWCBEZXNpZ25lciByb2xlIGF0IFVzZXJGaXJzdC4gV2U'2ZSBtb3ZlZCBmb3J3YXJkIHdpdGggY2FuZGlkYXRlcyB3aG9zZSBleHBlcmllbmNlIGFsaWducyBtb3JlIGNsb3NlbHkgd2l0aCBvdXIgY3VycmVudCBuZWVkcy4=" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 1000,
    "raw": ""
  },
  {
    "id": "18c305e7f6a8b9c0",
    "threadId": "18c305e7f6a8b9c0",
    "labelIds": ["INBOX", "CATEGORY_FORUMS"],
    "snippet": "Regarding your application for the Software Development Intern position, we regret to inform you that we will not be extending an offer at this time.",
    "historyId": "12351",
    "internalDate": "1720992000000", // July 14, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "internships@futuretech.edu" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Internship Application Status" },
        { "name": "Date", "value": "Sun, 14 Jul 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 173, // Corrected size
        "data": "UmVnYXJkaW5nIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBTb2Z0d2FyZSBEZXZlbG9wbWVudCBJbnRlcm4gcG9zaXRpb24sIHdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgd2Ugd2lsbCBub3QgYmUgZXh0ZW5kaW5nIGFuIG9mZmVyIGF0IHRoaXMgdGltZS4=" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c316f8a7b9c0d1",
    "threadId": "18c316f8a7b9c0d1",
    "labelIds": ["INBOX"],
    "snippet": "Thank you for your interest in the Project Coordinator role at Synergy Group. We have filled the position with another candidate.",
    "historyId": "12352",
    "internalDate": "1721078400000", // July 15, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@synergygroup.net" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Update on Your Project Coordinator Application" },
        { "name": "Date", "value": "Mon, 15 Jul 2024 14:00:00 -0400" }
      ],
      "body": {
        "size": 139, // Corrected size
        "data": "VGhhbmsgZm9yIHlvdXIgaW50ZXJlc3QgaW4gdGhlIFByb2plY3QgQ29vcmRpbmF0b3Igcm9sZSBhdCBTWW5lcmd5IEdyb3VwLiBXZSBoYXZlIGZpbGxlZCB0aGUgcG9zaXRpb24gd2l0aCBhbm90aGVyIGNhbmRpZGF0ZS4=" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 880,
    "raw": ""
  },
  {
    "id": "18c327a9b8c0d1e2",
    "threadId": "18c327a9b8c0d1e2",
    "labelIds": ["INBOX", "STARRED"],
    "snippet": "Following careful consideration of your application for the Senior Software Engineer position at CoreTech, we regret to inform you that you were not selected.",
    "historyId": "12353",
    "internalDate": "1721164800000", // July 16, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@coretech.io" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Important Update: Senior Software Engineer" },
        { "name": "Date", "value": "Tue, 16 Jul 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 191, // Corrected size
        "data": "Rm9sbG93aW5nIGNhcmVmdWwgY29uc2lkZXJhdGlvbiBvZiB5b3VyIGFwcGxpY2F0aW9uIGZvciB0aGUgU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIHBvc2l0aW9uIGF0IENvcmVUZWNoLCB3ZSByZWdyZXQgdG8gaW5mb3JtIHlvdSB0aGF0IHlvdSB3ZXJlIG5vdCBzZWxlY3RlZC4=" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 1050,
    "raw": ""
  },
  {
    "id": "18c338baccde1f23",
    "threadId": "18c338baccde1f23",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "We wanted to let you know that we've decided not to move forward with your application for the Content Creator position at ViralHub.",
    "historyId": "12354",
    "internalDate": "1721251200000", // July 17, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "info@viralhub.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Regarding Your Content Creator Application" },
        { "name": "Date", "value": "Wed, 17 Jul 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 160, // Corrected size
        "data": "V2Ugd2FudGVkIHRvIGxldCB5b3Uga25vdyB0aGF0IHdl'2ZlIGRlY2lkZWQgbm90IHRvIG1vdmUgZm9yd2FyZCB3aXRoIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBDb250ZW50IENyZWF0b3IgcG9zaXRpb24gYXQgVmlyYWxIdWIu" // Correct Base64 encoded
      }
    },
    "sizeEstimate": 920,
    "raw": ""
  }
];

export const sampleMessageEmailApplications = [
  {
    "id": "18c349f1b3e4d5c6",
    "threadId": "18c349f1b3e4d5c6",
    "labelIds": ["UNREAD", "INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Thank you for submitting your application for the Software Engineer role at InnovateCorp. We've successfully received your materials.",
    "historyId": "12355",
    "internalDate": "1721337600000", // July 18, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@innovatecorp.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Received: Software Engineer - InnovateCorp" },
        { "name": "Date", "value": "Thu, 18 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 550,
        "data": "VGhhbmsgZm9yIHN1Ym1pdHRpbmcgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNvZnR3YXJlIEVuZ2luZWVyIHJvbGUgYXQgSW5ub3ZhdGVDb3JwLiBXZSBoYXZlIHN1Y2Nlc3NmdWxseSByZWNlaXZlZCB5b3VyIG1hdGVyaWFscyBhbmQgd2lsbCByZXZpZXcgdGhlbSBzaG9ydGx5Lg==" // Base64 encoded
      }
    },
    "sizeEstimate": 850,
    "raw": ""
  },
  {
    "id": "18c350e2c1f3a4b5",
    "threadId": "18c350e2c1f3a4b5",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "Your application for the Senior Product Manager position at GlobalTech has been received. Our team will review it and be in touch soon.",
    "historyId": "12356",
    "internalDate": "1721424000000", // July 19, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@globaltech.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Confirmation: Senior Product Manager Application" },
        { "name": "Date", "value": "Fri, 19 Jul 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 600,
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNlbmllciBQcm9kdWN0IE1hbmFnZXIgcG9zaXRpb24gYXQgR2xvYmFsVGVjaCBoYXMgYmVlbiByZWNlaXZlZC4gT3VyIHRlYW0gd2lsbCByZXZpZXcgaXQgYW5kIGJlIGluIHRvdWNoIHdpdGggYW55IHVwZGF0ZXMu" // Base64 encoded
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c361a3b2c4d5e6",
    "threadId": "18c361a3b2c4d5e6",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We confirm receipt of your application for the Data Scientist opening. We appreciate you taking the time to apply.",
    "historyId": "12357",
    "internalDate": "1721510400000", // July 20, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@analyticsco.ai" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Data Scientist Application - AnalyticsCo" },
        { "name": "Date", "value": "Sat, 20 Jul 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 580,
        "data": "V2UgY29uZmlybSByZWNlaXB0IG9mIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBEYXRhIFNjaWVudGlzdCBvcGVuaW5nLiBXZSBhcHByZWNpYXRlIHlvdSB0YWtpbmcgdGhlIHRpbWUgdG8gYXBwbHku" // Base64 encoded
      }
    },
    "sizeEstimate": 880,
    "raw": ""
  },
  {
    "id": "18c372b4c3d5e6f7",
    "threadId": "18c372b4c3d5e6f7",
    "labelIds": ["INBOX"],
    "snippet": "Success! Your application for the Marketing Manager role at BrandBuilders has been officially received.",
    "historyId": "12358",
    "internalDate": "1721596800000", // July 21, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@brandbuilders.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Received: Marketing Manager" },
        { "name": "Date", "value": "Sun, 21 Jul 2024 13:00:00 -0400" }
      ],
      "body": {
        "size": 520,
        "data": "U3VjY2VzcyEgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIE1hcmtldGluZyBNYW5hZ2VyIHJvbGUgYXQgQnJhbmRCdWlsZGVycyBoYXMgYmVlbiBvZmZpY2lhbGx5IHJlY2VpdmVkLg==" // Base64 encoded
      }
    },
    "sizeEstimate": 820,
    "raw": ""
  },
  {
    "id": "18c383c5d4e6f7a8",
    "threadId": "18c383c5d4e6f7a8",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "We've got your application for the Financial Analyst position at SecureInvestments. Expect to hear from us within 5-7 business days.",
    "historyId": "12359",
    "internalDate": "1721683200000", // July 22, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@secureinvestments.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Financial Analyst Application Status" },
        { "name": "Date", "value": "Mon, 22 Jul 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 650,
        "data": "V2UvZSBnb3QgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIEZpbmFuY2lhbCBBbmFseXN0IHBvc2l0aW9uIGF0IFNlY3VyZUluc3Zlc3RtZW50cy4gRXhwZWN0IHRvIGhlYXIgZnJvbSB1cyB3aXRoaW4gNS03IGJ1c2luZXNzIGRheXMu" // Base64 encoded
      }
    },
    "sizeEstimate": 950,
    "raw": ""
  },
  {
    "id": "18c394d6e5f7a8b9",
    "threadId": "18c394d6e5f7a8b9",
    "labelIds": ["INBOX"],
    "snippet": "Your application for the UX Researcher role at EmpathyLabs has been successfully received and is now under review.",
    "historyId": "12360",
    "internalDate": "1721769600000", // July 23, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruiting@empathylabs.org" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Receipt of Your UX Researcher Application" },
        { "name": "Date", "value": "Tue, 23 Jul 2024 14:00:00 -0400" }
      ],
      "body": {
        "size": 600,
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFVYIFJlc2VhcmNoZXIgcm9sZSBhdCBFbXBhdGh5TGFicyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgYW5kIGlzIG5vdyB1bmRlciByZXZpZXcu" // Base64 encoded
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c3a5e7f6a8b9c0",
    "threadId": "18c3a5e7f6a8b9c0",
    "labelIds": ["INBOX", "CATEGORY_FORUMS"],
    "snippet": "This confirms we've received your application for the Junior Developer position at CodeCrafters. Thank you for your interest!",
    "historyId": "12361",
    "internalDate": "1721856000000", // July 24, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@codecrafters.dev" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Confirmation: Junior Developer" },
        { "name": "Date", "value": "Wed, 24 Jul 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 570,
        "data": "VGhpcyBjb25maXJtcyB3ZSdzIHJlY2VpdmVkIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBKdW5pb3IgRGV2ZWxvcGVyIHBvc2l0aW9uIGF0IENvZGVDcmFmdGVycy4gVGhhbmsgZm9yIHlvdXIgaW50ZXJlc3Qh" // Base64 encoded
      }
    },
    "sizeEstimate": 870,
    "raw": ""
  },
  {
    "id": "18c3b6f8a7b9c0d1",
    "threadId": "18c3b6f8a7b9c0d1",
    "labelIds": ["INBOX"],
    "snippet": "We're pleased to inform you that your application for the Marketing Coordinator role at GrowthMarketers has been received.",
    "historyId": "12362",
    "internalDate": "1721942400000", // July 25, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@growthmarketers.agency" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Application to GrowthMarketers" },
        { "name": "Date", "value": "Thu, 25 Jul 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 610,
        "data": "V2Ugc2UgcGxlYXNlZCB0byBpbmZvcm0geW91IHRoYXQgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIE1hcmtldGluZyBDb29yZGluYXRvciByb2xlIGF0IEdyb3d0aE1hcmtldGVycyBoYXMgYmVlbiByZWNlaXZlZC4=" // Base64 encoded
      }
    },
    "sizeEstimate": 910,
    "raw": ""
  },
  {
    "id": "18c3c7a9b8c0d1e2",
    "threadId": "18c3c7a9b8c0d1e2",
    "labelIds": ["INBOX", "STARRED"],
    "snippet": "Your application for the Senior QA Engineer position at QualityAssurance Inc. has been received. We'll be in touch with next steps soon.",
    "historyId": "12363",
    "internalDate": "1722028800000", // July 26, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@qualityassurance.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Update: Senior QA Engineer" },
        { "name": "Date", "value": "Fri, 26 Jul 2024 15:00:00 -0400" }
      ],
      "body": {
        "size": 700,
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNlbmllciBRQSBFbmdpbmVlciBwb3NpdGlvbiBhdCBRdWFsaXR5QXNzdXJhbmNlIEluYy4gaGFzIGJlZW4gcmVjZWl2ZWQuIFdlJ2xsIGJlIGluIHRvdWNoIHdpdGggbmV4dCBzdGVwcyBzb29uLg==" // Base64 encoded
      }
    },
    "sizeEstimate": 1000,
    "raw": ""
  },
  {
    "id": "18c3d8baccde1f23",
    "threadId": "18c3d8baccde1f23",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "We confirm receipt of your application for the Entry-Level IT Support Specialist position at TechSolutions. We appreciate your submission.",
    "historyId": "12364",
    "internalDate": "1722115200000", // July 27, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "supportcareers@techsolutions.biz" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Application for IT Support Specialist" },
        { "name": "Date", "value": "Sat, 27 Jul 2024 08:30:00 -0400" }
      ],
      "body": {
        "size": 650,
        "data": "V2UgY29uZmlybSByZWNlaXB0IG9mIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBFbnRyeS1MZXZlbCBJVCBTdXBwb3J0IFNwZWNpYWxpc3QgcG9zaXRpb24gYXQgVGVjaFNvbHV0aW9ucy4gV2UgYXBwcmVjaWF0ZSB5b3VyIHN1Ym1pc3Npb24u" // Base64 encoded
      }
    },
    "sizeEstimate": 950,
    "raw": ""
  }
];

export const sampleIrrelevantEmails = [
  {
    "id": "18c3e8baccde1f24",
    "threadId": "18c3e8baccde1f24",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "Big savings this week on all electronics! Don't miss out on our limited-time offers.",
    "historyId": "12365",
    "internalDate": "1722201600000", // July 28, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "offers@electronicsmart.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "⚡ Flash Sale! Up to 50% Off Electronics!" },
        { "name": "Date", "value": "Sun, 28 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 1200,
        "data": "PHA+SGV5IHRoZXJlLCBiaWcgZmFucyBvZiBlbGVjdHJvbmljcyEgR2V0IHlvdXIgZmF2b3JpdGUgZ2FkZ2V0cyBhdCB1bmJlYSA1MCUgb2ZmIGZvciBhIGxpbWl0ZWQgdGltZSEgQ2xpY2sgbGlua2Jlcm93IGZvciBtb3JlLi4uPC9wPg==" // Base64 encoded HTML
      }
    },
    "sizeEstimate": 2000,
    "raw": ""
  },
  {
    "id": "18c3f9cbeedf20a5",
    "threadId": "18c3f9cbeedf20a5",
    "labelIds": ["INBOX", "CATEGORY_SOCIAL"],
    "snippet": "Hey, are you free for coffee next Tuesday? I wanted to catch up about our weekend trip plans.",
    "historyId": "12366",
    "internalDate": "1722288000000", // July 29, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "friend.name@personalmail.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Coffee next week?" },
        { "name": "Date", "value": "Mon, 29 Jul 2024 10:15:00 -0400" }
      ],
      "body": {
        "size": 300,
        "data": "SGV5LCBhcmUgeW91IGZyZWUgZm9yIGNvZmZlZSBuZXh0IFR1ZXNkYXk/IEkgd2FudGVkIHRvIGNhdGNoIHVwIGFib3V0IG91ciB3ZWVrZW5kIHRyaXAgcGxhbnMuIExldCBtZSBrbm93IQ==" // Base64 encoded
      }
    },
    "sizeEstimate": 600,
    "raw": ""
  },
  {
    "id": "18c40abcdfef31b6",
    "threadId": "18c40abcdfef31b6",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Your order #123456 has shipped! Track your package here: [Tracking Link]. Expected delivery by Friday.",
    "historyId": "12367",
    "internalDate": "1722374400000", // July 30, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "multipart/alternative",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "shipping@onlinestore.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Order Has Shipped! (#123456)" },
        { "name": "Date", "value": "Tue, 30 Jul 2024 14:30:00 -0400" }
      ],
      "body": { "size": 0 },
      "parts": [
        {
          "partId": "0",
          "mimeType": "text/plain",
          "filename": "",
          "body": {
            "size": 400,
            "data": "WW91ciBvcmRlciAjMTIzNDU2IGhhcyBzaGlwcGVkISBUcmFjayB5b3VyIHBhY2thZ2UgaGVyZTogW1RyYWNraW5nIExpbmsuIFVzdXJlbHkgZXhwZWN0ZWQgZGVsaXZlcnkgYnkgRnJpZGF5Lg==" // Base64 encoded
          }
        }
      ]
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c41bcdef0142c7",
    "threadId": "18c41bcdef0142c7",
    "labelIds": ["SPAM", "UNREAD"],
    "snippet": "Congratulations! You've won a free vacation to the Bahamas! Click here to claim your prize.",
    "historyId": "12368",
    "internalDate": "1722460800000", // July 31, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "winning@luckydraws.xyz" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "You're a WINNER! Claim Your Prize Now!" },
        { "name": "Date", "value": "Wed, 31 Jul 2024 07:45:00 -0400" }
      ],
      "body": {
        "size": 800,
        "data": "PHA+Q29uZ3JhdHVsYXRpb25zISBZb3UndmUgd29uIGEgcHVyZmVjdCBmcmVlIHZhY2F0aW9uIHRvIHRoZSBCYWhhbWFzISBDbGljayBoZXJlIHRvIGNsYWltIHlvdXIgcHJpemUuLi48L3A+" // Base64 encoded HTML
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c42cdef12353d8",
    "threadId": "18c42cdef12353d8",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "Your monthly statement from BankName is now available. Log in to view your activity.",
    "historyId": "12369",
    "internalDate": "1722547200000", // August 1, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "noreply@bankname.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your August Statement from BankName" },
        { "name": "Date", "value": "Thu, 01 Aug 2024 16:00:00 -0400" }
      ],
      "body": {
        "size": 450,
        "data": "WW91ciBtb250aGx5IHN0YXRlbWVudCBmcm9tIEJhbmtOYW1lIGlzIG5vdyBhdmFpbGFibGUuIExvZyBpbiB0byB2aWV3IHlvdXIgYWN0aXZpdHku" // Base64 encoded
      }
    },
    "sizeEstimate": 750,
    "raw": ""
  },
  {
    "id": "18c43deff23464e9",
    "threadId": "18c43deff23464e9",
    "labelIds": ["INBOX"],
    "snippet": "Reminder: Your annual subscription for Premium Streaming expires in 7 days. Renew now to avoid interruption.",
    "historyId": "12370",
    "internalDate": "1722633600000", // August 2, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "noreply@premiumstreaming.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Subscription Renewal Reminder" },
        { "name": "Date", "value": "Fri, 02 Aug 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 500,
        "data": "UmVtaW5kZXI6IFlvdXIgYW5udWFsIHN1YnNjcmlwdGlvbiBmb3IgUHJlbWl1bSBTdHJlYW1pbmcgZXhwaXJlcyBpbiA3IGRheXMuIFJlbmV3IG5vdyB0byBhdm9pZCBpbnRlcnJ1cHRpb24u" // Base64 encoded
      }
    },
    "sizeEstimate": 800,
    "raw": ""
  },
  {
    "id": "18c44ef0134575f0",
    "threadId": "18c44ef0134575f0",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "New arrivals just dropped! Check out our latest fashion collection and get 20% off your first purchase.",
    "historyId": "12371",
    "internalDate": "1722720000000", // August 3, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "sales@fashiontrends.shop" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "👗 Fresh Styles! 20% Off New Collection!" },
        { "name": "Date", "value": "Sat, 03 Aug 2024 10:45:00 -0400" }
      ],
      "body": {
        "size": 1000,
        "data": "PHA+TmV3IGFycml2YWxzIGp1c3QgZHJvcHBlZCEgQ2hlY2sgb3V0IG91ciBsYXRlc3QgZmFzaGlvbiBjb2xsZWN0aW9uIGFuZCBnZXQgMjAlIG9mZiB5b3VyIGZpcnN0IHB1cmNoYXNlLi4uPC9wPg==" // Base64 encoded HTML
      }
    },
    "sizeEstimate": 1800,
    "raw": ""
  },
  {
    "id": "18c45f0124568601",
    "threadId": "18c45f0124568601",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "Your mobile data usage for August is 75% consumed. You have 2.5 GB remaining until your next billing cycle.",
    "historyId": "12372",
    "internalDate": "1722806400000", // August 4, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "notifications@mobilecarrier.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Mobile Data Usage Alert" },
        { "name": "Date", "value": "Sun, 04 Aug 2024 09:10:00 -0400" }
      ],
      "body": {
        "size": 550,
        "data": "WW91ciBtb2JpbGUgZGF0YSB1c2FnZSBmb3IgQXVndXN0IGlzIDc1JSBjb25zdW1lZC4gWW91IGhhdmUgMi41IEdCIHJlbWFpbmluZyB1bnRpbCB5b3VyIG5leHQgYmlsbGluZyBjeWNsZS4=" // Base64 encoded
      }
    },
    "sizeEstimate": 850,
    "raw": ""
  },
  {
    "id": "18c4601235679712",
    "threadId": "18c4601235679712",
    "labelIds": ["SPAM"],
    "snippet": "Urgent: Your account security is at risk! Click immediately to verify your login credentials or your account will be suspended.",
    "historyId": "12373",
    "internalDate": "1722892800000", // August 5, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "securityalert@fakewebsite.net" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "ACCOUNT SUSPENSION WARNING!" },
        { "name": "Date", "value": "Mon, 05 Aug 2024 13:00:00 -0400" }
      ],
      "body": {
        "size": 900,
        "data": "PHA+VXJnZW50OiBZb3VyIGFjY291bnQgc2VjdXJpdHkgaXMgYXQgcmlzayEgd2V2ZSBjbGlja2VkIGltbWVkaWF0ZWx5IHRvIHZlcmlmeSB5b3VyIGxvZ2luIGNyZWRlbnRpYWxzIG9yIHlvdXIgYWNjb3VudCB3aWxsIGJlIHN1c3BlbmRlZC48L3A+" // Base64 encoded HTML
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c4712346780823",
    "threadId": "18c4712346780823",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Just wanted to send you the photos from our camping trip last month. They turned out great!",
    "historyId": "12374",
    "internalDate": "1722979200000", // August 6, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "multipart/mixed", // Often for emails with attachments
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "another.friend@email.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Camping Trip Photos!" },
        { "name": "Date", "value": "Tue, 06 Aug 2024 10:00:00 -0400" }
      ],
      "body": { "size": 0 },
      "parts": [
        {
          "partId": "0",
          "mimeType": "text/plain",
          "filename": "",
          "body": {
            "size": 350,
            "data": "SnVzdCB3YW50ZWQgdG8gc2VuZCB5b3UgdGhlIHBob3RvcyBmcm9tIG91ciBjYW1waW5nIHRyaXAgbGFzdCBtb250aC4gVGhleSB0dXJuZWQgb3V0IGdyZWF0ISBWZXJ5IG1lbW9yYWJsZS4=" // Base64 encoded
          }
        },
        {
          "partId": "1",
          "mimeType": "image/jpeg", // Example of an attachment part
          "filename": "camping_photo_1.jpg",
          "body": {
            "size": 50000, // Placeholder size
            "data": "aW1hZ2UgcGxhY2Vob2xkZXIgZGF0YQ==" // Base64 encoded (actual image data would be much longer)
          }
        }
      ]
    },
    "sizeEstimate": 55000,
    "raw": ""
  }
];

export const sampleInterviewEmails = [
  {
    "id": "18c4812346781934",
    "threadId": "18c4812346781934",
    "labelIds": ["UNREAD", "INBOX", "IMPORTANT"],
    "snippet": "We'd love to invite you for an interview for the Software Developer position at Quantum Dynamics! Please use the link to schedule your preferred time.",
    "historyId": "12375",
    "internalDate": "1723065600000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@quantumdynamics.tech" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: Software Developer - Quantum Dynamics" },
        { "name": "Date", "value": "Wed, 07 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 600, // Placeholder size
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nThank you for your application to the Software Developer position at Quantum Dynamics. We are impressed by your qualifications and would like to invite you for a next step interview.\\n\\nPlease use the following link to schedule a time that works best for you: [Scheduling Link]\\n\\nThis will be a 45-minute virtual interview with [Interviewer Name], [Interviewer Title] and We look forward to chatting with you!\\n\\nRegards,\\n\\t[Recruiter Name]\\n\\t[Recruiter Title]' */"
      }
    },
    "sizeEstimate": 1100,
    "raw": ""
  },
  {
    "id": "18c4923457892045",
    "threadId": "18c4923457892045",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "Great news! We'd like to schedule a second-round interview for the Marketing Manager role at BrandBloom. Please pick a slot here.",
    "historyId": "12376",
    "internalDate": "1723152000000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@brandbloom.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Next Step: Marketing Manager Interview at BrandBloom" },
        { "name": "Date", "value": "Thu, 08 Aug 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 550,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Hi [Candidate Name],\\n\\nThanks for your continued interest in the Marketing Manager role at BrandBloom. We would like to invite you for a second-round interview with [Hiring Manager Name].\\n\\nPlease select your preferred slot via our calendar: [Scheduling Link]\\n\\nRegards,\\n\\t[Recruiter Name]' */"
      }
    },
    "sizeEstimate": 850,
    "raw": ""
  },
  {
    "id": "18c4a34568903156",
    "threadId": "18c4a34568903156",
    "labelIds": ["INBOX", "STARRED"],
    "snippet": "Following your initial screening, we'd like to invite you for a technical interview for the Data Scientist position at Axiom Analytics.",
    "historyId": "12377",
    "internalDate": "1723238400000",
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruiting@axiomanalytics.ai" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Technical Interview Invitation: Data Scientist" },
        { "name": "Date", "value": "Fri, 09 Aug 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 900,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>Following your initial screening, we have determined your skills are a strong match for the Data Scientist position at Axiom Analytics. We've like to invite you for a technical interview.</p><p>This interview will consist of a problem-solving session and will be staffed by [Developer Name], [Developer Title]. Please confirm your availability for Wednesday, August 14, 2024 at 2 PM EDT.</p><p>Kind regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Title]</p>' */"
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c4b45679014267",
    "threadId": "18c4b45679014267",
    "labelIds": ["INBOX"],
    "snippet": "We're excited to invite you to interview for the Project Coordinator role at Synergy Solutions. Please choose from the available times.",
    "historyId": "12378",
    "internalDate": "1723324800000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@synergysolutions.net" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Opportunity: Project Coordinator" },
        { "name": "Date", "value": "Sat, 10 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 500,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Hello [Candidate Name],\\n\\nThank you for your interest in the Project Coordinator role at Synergy Solutions. We would like to invite you for a phone interview.\\n\\nTo enable you to select a time that works for you, please click here: [Scheduling Link]\\n\\nWe look forward to speaking with you.\\n\\nBest regards,\\n\\t[Recruiter Name]' */"
      }
    },
    "sizeEstimate": 800,
    "raw": ""
  },
  {
    "id": "18c4c56780125378",
    "threadId": "18c4c56780125378",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Your application for the Financial Analyst role at Capital Ventures stood out! We'd like to schedule a virtual interview to discuss it further.",
    "historyId": "12379",
    "internalDate": "1723411200000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruitment@capitalventures.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Request: Financial Analyst" },
        { "name": "Date", "value": "Sun, 11 Aug 2024 13:00:00 -0400" }
      ],
      "body": {
        "size": 650,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nWe're pleased to inform you that your application for the Financial Analyst role at Capital Ventures has progressed to the next stage. We would like to invite you for a virtual interview.\\n\\nCan you please confirm your availability for one of these times: Aug 15, 2024 at 10 AM EDT | 2 PM EDT\\n\\nRegards,\\n\\t[Recruiter Name]' */"
      }
    },
    "sizeEstimate": 950,
    "raw": ""
  },
  {
    "id": "18c4d67891236489",
    "threadId": "18c4d67891236489",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Your profile for the Senior UX Designer position at InnovateUX has caught our eye. Let's schedule a portfolio review and interview.",
    "historyId": "12380",
    "internalDate": "1723497600000",
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@innovateux.design" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Opportunity: Senior UX Designer" },
        { "name": "Date", "value": "Mon, 12 Aug 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 1000,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Hello [Candidate Name],</p><p>We were very impressed by your application for the Senior UX Designer position at InnovateUX. We would love to invite you for a portfolio review and interview with our Hiring Manager, [Ms Jane Smith].</p><p>Please click here to access and schedule a time from offered slots: [Scheduling Link]</p><p>Best regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Title]</p>' */"
      }
    },
    "sizeEstimate": 1800,
    "raw": ""
  },
  {
    "id": "18c4e78902347590",
    "threadId": "18c4e78902347590",
    "labelIds": ["INBOX"],
    "snippet": "We'd like to invite you for a virtual interview for the full-time Software Engineer position. Please click the link to confirm your availability.",
    "historyId": "12381",
    "internalDate": "1723584000000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruitment@techco.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invite: Software Engineer" },
        { "name": "Date", "value": "Tue, 13 Aug 2024 14:00:00 -0400" }
      ],
      "body": {
        "size": 600,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nThank you for your application to the full-time Software Engineer position at TechCo. We've considered your background and would like to invite you for a virtual interview.\\n\\nPlease click this link to confirm your availability for the interview: [Scheduling Link]\\n\\nWe look forward to speaking with you.\\n\\nBest regards,\\n\\t[Recruiter Name]' */"
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c4f89013458601",
    "threadId": "18c4f89013458601",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Exciting news! We'd like to schedule an on-site interview for the Lead Data Scientist role at Analytics Hub. Please let us know your availability.",
    "historyId": "12382",
    "internalDate": "1723670400000",
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@analyticshub.ai" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "On-Site Interview Invitation: Lead Data Scientist" },
        { "name": "Date", "value": "Wed, 14 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 1100,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>We really enjoyed our conversation and are excited to invite you for an on-site interview for the Lead Data Scientist role at Analytics Hub.</p><p>This interview will include meetings with our head of departments. The interview will be held at our offices located at [Address Office Location]. Please let us know your availability for any day on August 23 | 24, 2024 and we will send you a calendar invite.</p><p>Thanks,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Title]</p>' */"
      }
    },
    "sizeEstimate": 1900,
    "raw": ""
  },
  {
    "id": "18c5090124569712",
    "threadId": "18c5090124569712",
    "labelIds": ["INBOX"],
    "snippet": "We'd like to invite you to a virtual interview for the Content Marketing Specialist position at CreativeFlow. Please find available slots here.",
    "historyId": "12383",
    "internalDate": "1723756800000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@creativeflow.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: Content Marketing Specialist" },
        { "name": "Date", "value": "Thu, 15 Aug 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 600,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nWe would like to invite you for a virtual interview for the Content Marketing Specialist position at CreativeFlow.\\n\\nPlease find available slots and schedule your interview via this arranging link: [Scheduling Link]\\n\\nRegards,\\n\\t[Recruiter Name]\\n\\t[Recruiter Title]' */"
      }
    },
    "sizeEstimate": 900,
    "raw": ""
  },
  {
    "id": "18c51a1235670823",
    "threadId": "18c51a1235670823",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Your application for the HR Generalist role at PeopleFirst caught our attention. We'd like to invite you for an in-person interview.",
    "historyId": "12384",
    "internalDate": "1723843200000",
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@peoplefirst.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: HR Generalist" },
        { "name": "Date", "value": "Fri, 16 Aug 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 700,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nWe would like to invite you for an in-person interview for the HR Generalist role at PeopleFirst.\\n\\nThe interview will be held at our offices at [Office Address], on August 26, 2024 at 11:00 AM EDT. You will meet with [Hiring Manager Name], [Hiring Manager Title].\\n\\nPlease confirm your availability by August 20.' */"
      }
    },
    "sizeEstimate": 1000,
    "raw": ""
  }
];

export const sampleOfferEmails = [
  {
    "id": "18c57a7890164489",
    "threadId": "18c57a7890164489",
    "labelIds": ["UNREAD", "INBOX", "IMPORTANT", "CATEGORY_PERSONAL"],
    "snippet": "We're thrilled to offer you the position of **Software Engineer** at Tech Innovations! We believe your skills and experience are an excellent match for our team.",
    "historyId": "12390",
    "internalDate": "1724361600000", // August 22, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@techinnovations.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Software Engineer at Tech Innovations" },
        { "name": "Date", "value": "Thu, 22 Aug 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 900,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nFollowing your interviews, we are thrilled to offer you the position of Software Engineer at Tech Innovations! We believe your skills and experience are an excellent match for our team and we are excited about the potential contributions you can make.\\n\\nAttached to this email, you will find a formal offer letter detailing your compensation, benefits, and start date. Please review it carefully.\\n\\nWe kindly request that you accept or decline this offer by [Offer Expiration Date]. Should you have any questions, please do not hesitate to contact me.\\n\\nWe look forward to welcoming you to the team!\\n\\nSincerely,\\n\\t[Recruiter Name]\\n\\t[Recruiter Title]' */"
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c58b8901275590",
    "threadId": "18c58b8901275590",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Exciting news! We're pleased to extend an offer for the **Marketing Manager** position at Global Brands. Your vision aligns perfectly with our goals.",
    "historyId": "12391",
    "internalDate": "1724448000000", // August 23, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@globalbrands.marketing" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Marketing Manager - Global Brands" },
        { "name": "Date", "value": "Fri, 23 Aug 2024 10:45:00 -0400" }
      ],
      "body": {
        "size": 1200,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Hi [Candidate Name],</p><p>Following your interviews, we\'re pleased to extend an offer for the <strong>Marketing Manager</strong> position at Global Brands. Your vision and experience align perfectly with our team\'s goals, and we believe you will be a valuable asset.</p><p>We have attached the official offer letter for your review, which includes details on salary, benefits, and start date. Please accept or decline the offer by [Offer Expiration Date].</p><p>Should you have any questions, feel free to reach out directly.</p><p>Welcome to the team!</p><p>Best regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Hiring Manager Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Hiring Manager Title]</p>' */"
      }
    },
    "sizeEstimate": 2000,
    "raw": ""
  },
  {
    "id": "18c59c9012386601",
    "threadId": "18c59c9012386601",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "We are delighted to offer you the role of **Data Scientist** at AnalyticSight. Your analytical prowess impressed us greatly.",
    "historyId": "12392",
    "internalDate": "1724534400000", // August 24, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@analyticsight.ai" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Offer of Employment: Data Scientist - AnalyticSight" },
        { "name": "Date", "value": "Sat, 24 Aug 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 850,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nWe are delighted to formally offer you the position of Data Scientist at AnalyticSight. Your strong analytical skills and insights demonstrated during the interview process truly impressed our team.\\n\\nYour comprehensive offer package, including compensation details, benefits information, and terms of employment, has been attached as a PDF document.\\n\\nPlease review the offer by [Offer Expiration Date]. We are happy to answer any questions you may have.\\n\\nWe eagerly anticipate your positive response!\\n\\nBest regards,\\n\\t[Recruiter Name]\\n\\tHead of Talent Acquisition' */"
      }
    },
    "sizeEstimate": 1400,
    "raw": ""
  },
  {
    "id": "18c5adef01297712",
    "threadId": "18c5adef01297712",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Congratulations! We're excited to offer you the **Senior Product Manager** role at Innovate Solutions. Your leadership potential is clear.",
    "historyId": "12393",
    "internalDate": "1724620800000", // August 25, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@innovatesolutions.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Senior Product Manager - Innovate Solutions" },
        { "name": "Date", "value": "Sun, 25 Aug 2024 13:00:00 -0400" }
      ],
      "body": {
        "size": 1100,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>Congratulations! We\'re excited to formally offer you the <strong>Senior Product Manager</strong> role at Innovate Solutions. Your strategic thinking and leadership potential truly shone during your interviews.</p><p>Please find your personalized offer details, including salary, equity, and comprehensive benefits, in the attached document. We encourage you to review it thoroughly.</p><p>Kindly respond to this offer by [Offer Expiration Date]. We\'re available to discuss any questions you may have.</p><p>We look forward to the possibility of you joining our innovative team!</p><p>Warmly,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiting Department]</p>' */"
      }
    },
    "sizeEstimate": 1900,
    "raw": ""
  },
  {
    "id": "18c5be0123498823",
    "threadId": "18c5be0123498823",
    "labelIds": ["INBOX", "STARRED"],
    "snippet": "Following your final interview, we're thrilled to offer you the **Cybersecurity Analyst** position at SecureNet. We see you as a vital addition.",
    "historyId": "12394",
    "internalDate": "1724707200000", // August 26, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruitment@securenet.io" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Offer of Employment: Cybersecurity Analyst - SecureNet" },
        { "name": "Date", "value": "Mon, 26 Aug 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 950,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nFollowing your successful final interview, we are thrilled to offer you the position of Cybersecurity Analyst at SecureNet. We were impressed by your expertise and passion for security, and we see you as a vital addition to our growing team.\\n\\nYour official offer letter, which outlines your salary, benefits package, and potential start date, is attached for your detailed review.\\n\\nTo accept this exciting opportunity, please reply to this email or sign the attached document by [Offer Expiration Date]. Please feel free to schedule a call if you have questions.\\n\\nWe eagerly await your decision!\\n\\nSincerely,\\n\\t[Recruiter Name]\\n\\tTalent Acquisition Specialist' */"
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c5cf1234509934",
    "threadId": "18c5cf1234509934",
    "labelIds": ["INBOX"],
    "snippet": "We are delighted to formally offer you the role of **UX Researcher** at Human-Centered Design Labs. Your insights will be invaluable.",
    "historyId": "12395",
    "internalDate": "1724793600000", // August 27, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hiring@hcdlabs.org" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: UX Researcher - Human-Centered Design Labs" },
        { "name": "Date", "value": "Tue, 27 Aug 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 1050,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>We are delighted to formally offer you the role of <strong>UX Researcher</strong> at Human-Centered Design Labs. Your thoughtful insights and research methodology presented during your interviews will be invaluable to our team.</p><p>Attached, please find your official offer letter outlining your compensation package, comprehensive benefits, and a proposed start date. We encourage you to review all details at your convenience.</p><p>Please respond to this offer by [Offer Expiration Date]. We\'re available to schedule a call to address any questions you might have.</p><p>We are very excited about the prospect of you joining us!</p><p>Sincerely,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[HR Department]</p>' */"
      }
    },
    "sizeEstimate": 1800,
    "raw": ""
  },
  {
    "id": "18c5e01234510045",
    "threadId": "18c5e01234510045",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Following your successful interviews, we're pleased to offer you the **Junior Developer** role at CodeCrafters Studio. Welcome to the team!",
    "historyId": "12396",
    "internalDate": "1724880000000", // August 28, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@codecrafters.dev" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Offer of Employment: Junior Developer" },
        { "name": "Date", "value": "Wed, 28 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 800,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nFollowing your successful interviews, we\'re pleased to offer you the <strong>Junior Developer</strong> role at CodeCrafters Studio. Your enthusiasm and foundational skills make you a great fit for our development team.\\n\\nAn attached offer letter details your salary, benefits, and proposed start date. Please review these details at your earliest convenience.\\n\\nKindly confirm your acceptance or decline by [Offer Expiration Date]. We\'re here to answer any questions you might have.\\n\\nWelcome to the team! We\'re excited to have you join us!\\n\\nBest regards,\\n\\t[Hiring Manager Name]\\n\\tLead Developer' */"
      }
    },
    "sizeEstimate": 1300,
    "raw": ""
  },
  {
    "id": "18c5f12345110156",
    "threadId": "18c5f12345110156",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We are thrilled to offer you the position of **Senior QA Engineer** at QualityAssured Inc. Your dedication to quality stood out!",
    "historyId": "12397",
    "internalDate": "1724966400000", // August 29, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@qualityassured.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Senior QA Engineer - QualityAssured Inc." },
        { "name": "Date", "value": "Thu, 29 Aug 2024 14:00:00 -0400" }
      ],
      "body": {
        "size": 1250,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>We are thrilled to offer you the position of <strong>Senior QA Engineer</strong> at QualityAssured Inc. Your meticulous approach and dedication to quality assurance truly stood out during your evaluations.</p><p>Your formal offer letter, detailing your competitive salary, comprehensive benefits package, and potential start date, is attached for your review. We are confident you will make a significant impact on our product quality.</p><p>Please accept or decline this offer by [Offer Expiration Date]. Feel free to contact us with any questions or to schedule a call.</p><p>We look forward to the possibility of you joining our team and contributing to our commitment to excellence!</p><p>Best regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;Talent Acquisition' */"
      }
    },
    "sizeEstimate": 2100,
    "raw": ""
  },
  {
    "id": "18c6023451221167",
    "threadId": "18c6023451221167",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "We're excited to offer you the position of **Financial Analyst** at Prosperity Funds! We believe you'll be a key asset to our finance department.",
    "historyId": "12398",
    "internalDate": "1725052800000", // August 30, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@prosperityfunds.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Financial Analyst - Prosperity Funds" },
        { "name": "Date", "value": "Fri, 30 Aug 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 900,
        "data": "/* Base64 URL-encoded content of the plain text email body goes here. Example: 'Dear [Candidate Name],\\n\\nFollowing your comprehensive interview process, we are pleased to offer you the position of Financial Analyst at Prosperity Funds. We were impressed by your analytical acumen and believe you will be a key asset to our finance department.\\n\\nA detailed offer letter, outlining your salary, bonus potential, and full benefits package, is attached for your review.\\n\\nWe kindly ask for your decision by [Offer Expiration Date]. Please feel free to reach out with any questions or to discuss the offer further.\\n\\nWe eagerly look forward to the possibility of you joining our team!\\n\\nSincerely,\\n\\t[Hiring Manager Name]\\n\\tHead of Finance' */"
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c6134561232278",
    "threadId": "18c6134561232278",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Congratulations! We'd like to officially offer you the **Content Marketing Specialist** role at Storytellers Media. We're excited about your creative potential.",
    "historyId": "12399",
    "internalDate": "1725139200000", // August 31, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@storytellers.media" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Job Offer: Content Marketing Specialist - Storytellers Media" },
        { "name": "Date", "value": "Sat, 31 Aug 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 1150,
        "data": "/* Base64 URL-encoded content of the HTML email body goes here. Example: '<p>Dear [Candidate Name],</p><p>Congratulations! We\'d like to officially offer you the <strong>Content Marketing Specialist</strong> role at Storytellers Media. We were particularly impressed by your creative vision and communication skills demonstrated throughout your interviews.</p><p>Please find your comprehensive offer letter attached, which details your salary, commission structure, benefits, and a proposed start date. We are confident you will thrive in our dynamic content team.</p><p>Kindly review the offer and respond by [Offer Expiration Date]. We\'re available to answer any questions you may have.</p><p>We are very enthusiastic about the possibility of you joining our team and contributing to our impactful storytelling!</p><p>Warmly,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Hiring Manager Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;Head of Content' */"
      }
    },
    "sizeEstimate": 1950,
    "raw": ""
  }
];

