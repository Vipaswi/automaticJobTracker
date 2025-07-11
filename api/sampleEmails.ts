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
        { "name": "Date", "value": "Tue, 09 Jul 2024 09:15:00 -0400" }
      ],
      "body": {
        "size": 222, // Corrected size
        "data": "V2UgYXBwcmVjaWF0ZSB5b3VyIGFwcGxpY2F0aW9uIGZvciB0aGUgUHJvZHVjdCBNYW5hZ2VyIHJvbGUgYXQgSW5ub3ZhdGUgU29sdXRpb25zLiBXaGlsZSB5b3VyIHF1YWxpZmljYXRpb25zIGFyZSBpbXByZXNzaXZlLCB3ZSBoYXZlIHNlbGVjdGVkIGFub3RoZXIgY2FuZGlkYXRlIHRoYXQgbW9yZSBjbG9zZWx5IG1hdGNoZXMgb3VyIGN1cnJlbnQgbmVlZHMuIFdlIHdpc2ggeW91IHRoZSBiZXN0IGluIHlvdXIgZnV0dXJlIGVuZGVhdm91cnMu" // Correct Base64 encoded for "We appreciate your application for the Product Manager role at Innovate Solutions. While your qualifications are impressive, we have selected another candidate that more closely matches our current needs. We wish you the best in your future endeavours."
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c2c1f3d2e4c5b6",
    "threadId": "18c2c1f3d2e4c5b6",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Following your interview for the Data Scientist position, we have decided not to proceed with your application at this time.",
    "historyId": "12347",
    "internalDate": "1720646400000", // July 10, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@analytics-co.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Data Scientist Application Update" },
        { "name": "Date", "value": "Wed, 10 Jul 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 170, // Corrected size
        "data": "Rm9sbG93aW5nIHlvdXIgaW50ZXJ2aWV3IGZvciB0aGUgRGF0YSBTY2llbnRpc3QgcG9zaXRpb24sIHdlIGhhdmUgZGVjaWRlZCBub3QgdG8gcHJvY2VlZCB3aXRoIHlvdXIgYXBwbGljYXRpb24gYXQgdGhpcyB0aW1lLiBXZSB0aGFuayB5b3UgZm9yIHlvdXIgZWZmb3J0IGFuZCBjb25zaWRlcmF0aW9uLg==" // Correct Base64 encoded for "Following your interview for the Data Scientist position, we have decided not to proceed with your application at this time. We thank you for your effort and consideration."
      }
    },
    "sizeEstimate": 1400,
    "raw": ""
  },
  {
    "id": "18c2d2e4e3f5b6a7",
    "threadId": "18c2d2e4e3f5b6a7",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "Thank for applying to the Marketing Specialist role at Creative Minds. Unfortunately, we're not able to move forward with your candidacy at this time.",
    "historyId": "12348",
    "internalDate": "1720732800000", // July 11, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@creativeminds.org" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Regarding Your Marketing Specialist Application" },
        { "name": "Date", "value": "Thu, 11 Jul 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 165, // Corrected size
        "data": "VGhhbmsgZm9yIGFwcGx5aW5nIHRvIHRoZSBNYXJrZXRpbmcgU3BlY2lhbGlzdCByb2xlIGF0IENyZWF0aXZlIE1pbmRzLiBVbmZvcnR1bmF0ZWx5LCB3ZSdyZSBub3QgYWJsZSB0byBtb3ZlIGZvcndhcmQgd2l0aCB5b3VyIGNhbmRpZGFjeSBhdCB0aGlzIHRpbWUu" // Correct Base64 encoded for "Thank for applying to the Marketing Specialist role at Creative Minds. Unfortunately, we're not able to move forward with your candidacy at this time."
      }
    },
    "sizeEstimate": 1300,
    "raw": ""
  },
  {
    "id": "18c2e3f5f4a6c7d8",
    "threadId": "18c2e3f5f4a6c7d8",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "We appreciate your interest in the Financial Analyst position at CapitalCorp. We regret to inform you that you have not been selected for an interview.",
    "historyId": "12349",
    "internalDate": "1720819200000", // July 12, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "info@capitalcorp.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Financial Analyst Application Status" },
        { "name": "Date", "value": "Fri, 12 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 196, // Corrected size
        "data": "V2UgYXBwcmVjaWF0ZSB5b3VyIGludGVyZXN0IGluIHRoZSBGaW5hbmNpYWwgQW5hbHlzdCBwb3NpdGlvbiBhdCBDYXBpdGFsQ29ycC4gV2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3UgaGF2ZSBub3QgYmVlbiBzZWxlY3RlZCBmb3IgYW4gaW50ZXJ2aWV3IGF0IHRoaXMgdGltZS4=" // Correct Base64 encoded for "We appreciate your interest in the Financial Analyst position at CapitalCorp. We regret to inform you that you have not been selected for an interview at this time."
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c2f4a6g5h7i8j9",
    "threadId": "18c2f4a6g5h7i8j9",
    "labelIds": ["INBOX"],
    "snippet": "Thank for applying to the UX Designer role at UserFirst. We've moved forward with candidates whose experience aligns more closely with our current needs.",
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
        { "name": "Date", "value": "Sat, 13 Jul 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 194, // Corrected size
        "data": "VGhhbmsgZm9yIGFwcGx5aW5nIHRvIHRoZSBVWCBEZXNpZ25lciByb2xlIGF0IFVzZXJGaXJzdC4gV2UndmUgbW92ZWQgZm9yd2FyZCB3aXRoIGNhbmRpZGF0ZXMgd2hvc2UgZXhwZXJpZW5jZSBhbGlnbnMgbW9yZSBjbG9zZWx5IHdpdGggb3VyIGN1cnJlbnQgbmVlZHMu" // Correct Base64 encoded for "Thank for applying to the UX Designer role at UserFirst. We've moved forward with candidates whose experience aligns more closely with our current needs."
      }
    },
    "sizeEstimate": 1700,
    "raw": ""
  },
  {
    "id": "18c305b7h6i8j9k0",
    "threadId": "18c305b7h6i8j9k0",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Regarding your application for the Software Development Intern position, we regret to inform you that we will not be extending an offer at this time.",
    "historyId": "12351",
    "internalDate": "1720992000000", // July 14, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "internships@devsolutions.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Internship Application Status" },
        { "name": "Date", "value": "Sun, 14 Jul 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 199, // Corrected size
        "data": "UmVnYXJkaW5nIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBTb2Z0d2FyZSBEZXZlbG9wbWVudCBJbnRlcm4gcG9zaXRpb24sIHdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgd2Ugd2lsbCBub3QgYmUgZXh0ZW5kaW5nIGFuIG9mZmVyIGF0IHRoaXMgdGltZS4=" // Correct Base64 encoded for "Regarding your application for the Software Development Intern position, we regret to inform you that we will not be extending an offer at this time."
      }
    },
    "sizeEstimate": 1550,
    "raw": ""
  },
  {
    "id": "18c316c8i7j9k0l1",
    "threadId": "18c316c8i7j9k0l1",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Thank for your interest in the Project Coordinator role at Synergy Group. We have filled the position with another candidate.",
    "historyId": "12352",
    "internalDate": "1721078400000", // July 15, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@synergygroup.net" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Update on Your Project Coordinator Application" },
        { "name": "Date", "value": "Mon, 15 Jul 2024 08:30:00 -0400" }
      ],
      "body": {
        "size": 158, // Corrected size
        "data": "VGhhbmsgZm9yIHlvdXIgaW50ZXJlc3QgaW4gdGhlIFByb2plY3QgQ29vcmRpbmF0b3Igcm9sZSBhdCBTWU5lcmd5IEdyb3VwLiBXZSBoYXZlIGZpbGxlZCB0aGUgcG9zaXRpb24gd2l0aCBhbm90aGVyIGNhbmRpZGF0ZS4=" // Correct Base64 encoded for "Thank for your interest in the Project Coordinator role at SYnergy Group. We have filled the position with another candidate."
      }
    },
    "sizeEstimate": 1400,
    "raw": ""
  },
  {
    "id": "18c327d9j8k0l1m2",
    "threadId": "18c327d9j8k0l1m2",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Following careful consideration of your application for the Senior Software Engineer position at CoreTech, we regret to inform you that you were not selected.",
    "historyId": "12353",
    "internalDate": "1721164800000", // July 16, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@coretech.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Important Update: Senior Software Engineer" },
        { "name": "Date", "value": "Tue, 16 Jul 2024 09:45:00 -0400" }
      ],
      "body": {
        "size": 204, // Corrected size
        "data": "Rm9sbG93aW5nIGNhcmVmdWwgY29uc2lkZXJhdGlvbiBvZiB5b3VyIGFwcGxpY2F0aW9uIGZvciB0aGUgU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIHBvc2l0aW9uIGF0IENvcmVUZWNoLCB3ZSByZWdyZXQgdG8gaW5mb3JtIHlvdSB0aGF0IHlvdSB3ZXJlIG5vdCBzZWxlY3RlZC4=" // Correct Base64 encoded for "Following careful consideration of your application for the Senior Software Engineer position at CoreTech, we regret to inform you that you were not selected."
      }
    },
    "sizeEstimate": 1650,
    "raw": ""
  },
  {
    "id": "18c338eak9l0m1n2",
    "threadId": "18c338eak9l0m1n2",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "We wanted to let you know that we've decided not to move forward with your application for the Content Creator role at StoryCraft. We appreciate your interest.",
    "historyId": "12354",
    "internalDate": "1721251200000", // July 17, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@storycraft.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Regarding Your Content Creator Application" },
        { "name": "Date", "value": "Wed, 17 Jul 2024 10:15:00 -0400" }
      ],
      "body": {
        "size": 218, // Corrected size
        "data": "V2Ugd2FudGVkIHRvIGxldCB5b3Uga25vdyB0aGF0IHdlJ2JlIGRlY2lkZWQgbm90IHRvIG1vdmUgZm9yd2FyZCB3aXRoIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBDb250ZW50IENyZWF0b3Igcm9sZSBhdCBTdG9yeUNyYWZ0LiBXZSBhcHByZWNpYXRlIHlvdXIgaW50ZXJlc3Qu" // Correct Base64 encoded for "We wanted to let you know that we've decided not to move forward with your application for the Content Creator role at StoryCraft. We appreciate your interest."
      }
    },
    "sizeEstimate": 1350,
    "raw": ""
  }
];

export const sampleMessageEmailApplications = [
  {
    "id": "18c349fa1b2c3d4e",
    "threadId": "18c349fa1b2c3d4e",
    "labelIds": ["UNREAD", "INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Thank you for submitting your application for the Software Engineer role at InnovateCorp. We have successfully received your materials.",
    "historyId": "12355",
    "internalDate": "1721337600000", // July 18, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@innovatecorp.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Received: Software Engineer - InnovateCorp" },
        { "name": "Date", "value": "Thu, 18 Jul 2024 08:00:00 -0400" }
      ],
      "body": {
        "size": 178, // Corrected size
        "data": "VGhhbmsgZm9yIHN1Ym1pdHRpbmcgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNvZnR3YXJlIEVuZ2luZWVyIHJvbGUgYXQgSW5ub3ZhdGVDb3JwLiBXZSBoYXZlIHN1Y2Nlc3NmdWxseSByZWNlaXZlZCB5b3VyIG1hdGVyaWFscyBhbmQgd2lsbCByZXZpZXcgdGhlbSBzaG9ydGx5Lg==" // Correct Base64 for "Thank for submitting your application for the Software Engineer role at InnovateCorp. We have successfully received your materials and will review them shortly."
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c35afb2c3d4e5f",
    "threadId": "18c35afb2c3d4e5f",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Your application for the Senior Product Manager position at GlobalTech has been received. Our team will review it and be in touch.",
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
        { "name": "Date", "value": "Fri, 19 Jul 2024 09:15:00 -0400" }
      ],
      "body": {
        "size": 179, // Corrected size
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNlbmllciBQcm9kdWN0IE1hbmFnZXIgcG9zaXRpb24gYXQgR2xvYmFsVGVjaCBoYXMgYmVlbiByZWNlaXZlZC4gT3VyIHRlYW0gd2lsbCByZXZpZXcgaXQgYW5kIGJlIGluIHRvdWNoIHdpdGggYW55IHVwZGF0ZXMu" // Correct Base64 for "Your application for the Senior Product Manager position at GlobalTech has been received. Our team will review it and be in touch with any updates."
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c36bfd3e4f5a6b",
    "threadId": "18c36bfd3e4f5a6b",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "We confirm receipt of your application for the Data Scientist opening. We appreciate you taking the time to apply.",
    "historyId": "12357",
    "internalDate": "1721510400000", // July 20, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@analytics-co.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Data Scientist Application - AnalyticsCo" },
        { "name": "Date", "value": "Sat, 20 Jul 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 117, // Corrected size
        "data": "V2UgY29uZmlybSByZWNlaXB0IG9mIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBEYXRhIFNjaWVudGlzdCBvcGVuaW5nLiBXZSBhcHByZWNpYXRlIHlvdSB0YWtpbmcgdGhlIHRpbWUgdG8gYXBwbHku" // Correct Base64 for "We confirm receipt of your application for the Data Scientist opening. We appreciate you taking the time to apply."
      }
    },
    "sizeEstimate": 1400,
    "raw": ""
  },
  {
    "id": "18c37cee4f5a6b7c",
    "threadId": "18c37cee4f5a6b7c",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "Success! Your application for the Marketing Manager role at BrandBuilders has been officially received.",
    "historyId": "12358",
    "internalDate": "1721596800000", // July 21, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "info@brandbuilders.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Received: Marketing Manager" },
        { "name": "Date", "value": "Sun, 21 Jul 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 109, // Corrected size
        "data": "U3VjY2VzcyEgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIE1hcmtldGluZyBNYW5hZ2VyIHJvbGUgYXQgQnJhbmRCdWlsZGVycyBoYXMgYmVlbiBvZmZpY2lhbGx5IHJlY2VpdmVkLg==" // Correct Base64 for "Success! your application for the Marketing Manager role at BrandBuilders has been officially received."
      }
    },
    "sizeEstimate": 1300,
    "raw": ""
  },
  {
    "id": "18c38df05a6b7c8d",
    "threadId": "18c38df05a6b7c8d",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We got your application for the Financial Analyst position at SecureInvestments. Expect to hear from us within 5-7 business days.",
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
        { "name": "Date", "value": "Mon, 22 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 154, // Corrected size
        "data": "V2UvZSBnb3QgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlRmluYW5jaWFsIEFuYWx5c3QgcG9zaXRpb24gYXQgU2VjdXJlSW5zdmVzdG1lbnRzLiBFeHBlY3QgdG8gaGVhciBmcm9tIHVzIHdpdGhpbiA1LTcgYnVzaW5lc3MgZGF5cy4=" // Correct Base64 for "We/e got your application for the Financial Analyst position at SecureInsvestments. Expect to hear from us within 5-7 business days."
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c39ef16b7c8d9e",
    "threadId": "18c39ef16b7c8d9e",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Your application for the UX Researcher role at EmpathyLabs has been successfully received and is now under review.",
    "historyId": "12360",
    "internalDate": "1721769600000", // July 23, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "info@empathylabs.org" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Receipt of Your UX Researcher Application" },
        { "name": "Date", "value": "Tue, 23 Jul 2024 11:30:00 -0400" }
      ],
      "body": {
        "size": 142, // Corrected size
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFVYIFJlc2VhcmNoZXIgcm9sZSBhdCBFbXBhdGh5TGFicyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcmVjZWl2ZWQgYW5kIGlzIG5vdyB1bmRlciByZXZpZXcu" // Correct Base64 for "Your application for the UX Researcher role at EmpathyLabs has been successfully received and is now under review."
      }
    },
    "sizeEstimate": 1700,
    "raw": ""
  },
  {
    "id": "18c3afe27c8d9e0f",
    "threadId": "18c3afe27c8d9e0f",
    "labelIds": ["INBOX"],
    "snippet": "This confirms we've received your application for the Junior Developer position at CodeCrafters. Thank for your interest!",
    "historyId": "12361",
    "internalDate": "1721856000000", // July 24, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@codecrafters.dev" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Confirmation: Junior Developer" },
        { "name": "Date", "value": "Wed, 24 Jul 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 139, // Corrected size
        "data": "VGhpcyBjb25maXJtcyB3ZSdzIHJlY2VpdmVkIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBKdW5pb3IgRGV2ZWxvcGVyIHBvc2l0aW9uIGF0IENvZGVDcmFmdGVycy4gVGhhbmsgZm9yIHlvdXIgaW50ZXJlc3Qh" // Correct Base64 for "This confirms we's received your application for the Junior Developer position at CodeCrafters. Thank for your interest!"
      }
    },
    "sizeEstimate": 1300,
    "raw": ""
  },
  {
    "id": "18c3bff38d9e0f10",
    "threadId": "18c3bff38d9e0f10",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "We are pleased to inform you that your application for the Marketing Coordinator role at GrowthMarketers has been received.",
    "historyId": "12362",
    "internalDate": "1721942400000", // July 25, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@growthmarketers.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Application to GrowthMarketers" },
        { "name": "Date", "value": "Thu, 25 Jul 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 156, // Corrected size
        "data": "V2Ugc2UgcGxlYXNlZCB0byBpbmZvcm0geW91IHRoYXQgeW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIE1hcmtldGluZyBDb29yZGluYXRvciByb2xlIGF0IEdyb3d0aE1hcmtldGVycyBoYXMgYmVlbiByZWNlaXZlZC4=" // Correct Base64 for "We se pleased to inform you that your application for the Marketing Coordinator role at GrowthMarketers has been received."
      }
    },
    "sizeEstimate": 1450,
    "raw": ""
  },
  {
    "id": "18c3cf049e0f1021",
    "threadId": "18c3cf049e0f1021",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Your application for the Senior QA Engineer position at QualityAssurance Inc. has been received. We'll be in touch with next steps soon.",
    "historyId": "12363",
    "internalDate": "1722028800000", // July 26, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@qualityassurance.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Application Update: Senior QA Engineer" },
        { "name": "Date", "value": "Fri, 26 Jul 2024 14:00:00 -0400" }
      ],
      "body": {
        "size": 172, // Corrected size
        "data": "WW91ciBhcHBsaWNhdGlvbiBmb3IgdGhlIFNlbmllciBRQSBFbmdpbmVlciBwb3NpdGlvbiBhdCBRdWFsaXR5QXNzdXJhbmNlIEluYy4gaGFzIGJlZW4gcmVjZWl2ZWQuIFdlJ2xsIGJlIGluIHRvdWNoIHdpdGggbmV4dCBzdGVwcyBzb29uLg==" // Correct Base64 for "Your application for the Senier QA Engineer position at QualityAssurance Inc. has been received. We'll be in touch with next steps soon."
      }
    },
    "sizeEstimate": 1800,
    "raw": ""
  },
  {
    "id": "18c3df15a0f11132",
    "threadId": "18c3df15a0f11132",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We confirm receipt of your application for the Entry-Level IT Support Specialist position at TechSolutions. We appreciate your submission.",
    "historyId": "12364",
    "internalDate": "1722115200000", // July 27, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruitment@techsolutions.io" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Your Application for IT Support Specialist" },
        { "name": "Date", "value": "Sat, 27 Jul 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 177, // Corrected size
        "data": "V2UgY29uZmlybSByZWNlaXB0IG9mIHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBFbnRyeS1MZXZlbCBJVCBTdXBwb3J0IFNwZWNpYWxpc3QgcG9zaXRpb24gYXQgVGVjaFNvbHV0aW9ucy4gV2UgYXBwcmVjaWF0ZSB5b3VyIHN1Ym1pc3Npb24u" // Correct Base64 for "We confirm receipt of your application for the Entry-Level IT Support Specialist position at TechSolutions. We appreciate your submission."
      }
    },
    "sizeEstimate": 1500,
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
    "id": "18c3ef26b1c2d3e4",
    "threadId": "18c3ef26b1c2d3e4",
    "labelIds": ["UNREAD", "INBOX", "CATEGORY_PERSONAL"],
    "snippet": "Thank you for your application to the Software Developer position at Quantum Dynamics. We are impressed by your qualifications and would like to invite you for an interview.",
    "historyId": "12365",
    "internalDate": "1722201600000", // July 28, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@quantumdynamics.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: Software Developer - Quantum Dynamics" },
        { "name": "Date", "value": "Sun, 28 Jul 2024 08:00:00 -0400" }
      ],
      "body": {
        "size": 395, // Corrected size
        "data": "RGFyIFtDYW5kaWRhdGUgTmFtZV0sCgpUaGFuayB5b3UgZm9yIHlvdXIgYXBwbGljYXRpb24gdG8gdGhlIFNvZnR3YXJlIERldmVsb3BlciBwb3NpdGlvbiBhdCBRdWFudHVtIER5bmFtaWNzLiBXZSBhcmUgaW1wcmVzc2VkIGJ5IHlvdXIgcXVhbGlmaWNhdGlvbnMgYW5kIHdvdWxkIGxpa2UgdG8gaW52aXRlIHlvdSBmb3IgYSBuZXh0IHN0ZXAgaW50ZXJ2aWV3LgoKUGxlYXNlIHVzZSB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2NoZWR1bGUgYSB0aW1lIHRoYXQgd29ya3MgYmVzdCBmb3IgeW91OiBbU2NoZWR1bGluZyBMaW5rXQoKVGhpcyB3aWxsIGJlIGEgNDUtbWludXRlIHZpcnR1YWwgaW50ZXJ2aWV3IHdpdGggW0ludGVydmllZXIgTmFtZV0sIFtJbnRlcnZpZXdlciBUaXRsZV0gYW5kIHdlIGxvb2sgZm9yd2FyZCB0byBjaGF0dGluZyB3aXRoIHlvdSEKCkJlc3QgcmVnYXJkcywKCVtSZWNydWl0ZXIgTmFtZV0KCVtSZWNydWl0ZXIgVGl0bGVd" // Correct Base64 for "Dar [Candidate Name],\n\nThank you for your application to the Software developer position at Quantum Dynamics. We are impressed by your qualifications and would like to invite you for a next step interview.\n\nPlease use the following link to schedule a time that works best for you: [Scheduling Link]\n\nThis will be a 45-minute virtual interview with [Interviewer Name], [Interviewer Title] and We look forward to chatting with you!\n\nBest regards,\n\t[Recruiter Name]\n\t[Recruiter Title]"
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c3ff37c2d3e4f5",
    "threadId": "18c3ff37c2d3e4f5",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "Thanks for your continued interest in the Marketing Manager role at BrandBloom. We would like to invite you for a second-round interview.",
    "historyId": "12366",
    "internalDate": "1722288000000", // July 29, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@brandbloom.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Next Step: Marketing Manager Interview at BrandBloom" },
        { "name": "Date", "value": "Mon, 29 Jul 2024 09:15:00 -0400" }
      ],
      "body": {
        "size": 268, // Corrected size
        "data": "SGkgW0NhbmRpZGF0ZSBOYW1lXSwKClNsYW5rcyBmb3IgeW91ciBjb250aW51ZWQgaW50ZXJlc3QgaW4gdGhlIE1hcmtldGluZyBNYW5hZ2VyIHJvbGUgYXQgQnJhbmRCbG9vbS4gV2Ugd291bGQgbGlrZSB0byBpbnZpdGUgeW91IGZvciBhIHNlY29uZC1yb3VuZCBpbnRlcnZpZXcgd2l0aCBbSGlyZSBtYW5hZ2VyIE5hbWVdCgpQxlYXNlIHNlbGVjdCB5b3VyIHByZWZlcnJlZCBzbG90IHZpYSBvdXIgY2FsZW5kYXRvcmVyOiBbU2NoZWR1bGluZyBMaW5rXQoKQmVzdCByZWdhcmRzLAoJCVtSZWNydWl0ZXIgTmFtZV0" // Correct Base64 for "Hi [Candidate Name],\n\nThanks for your continued interest in the Marketing Manager role at BrandBloom. We would like to invite you for a second-round interview with [Hiring Manager Name]\n\nPlease select your preferred slot via our calendar: [Scheduling Link]\n\nBest regards,\n\t[Recruiter Name]"
      }
    },
    "sizeEstimate": 1600,
    "raw": ""
  },
  {
    "id": "18c40048d3e4f5a6",
    "threadId": "18c40048d3e4f5a6",
    "labelIds": ["INBOX", "CATEGORY_UPDATES"],
    "snippet": "Following your initial screening, we've determined your skills are a strong match for the Data Scientist position at Urban Analytics. We'd like to invite you for a technical interview.",
    "historyId": "12367",
    "internalDate": "1722374400000", // July 30, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "jobs@urbananalytics.ai" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Technical Interview Invitation: Data Scientist" },
        { "name": "Date", "value": "Tue, 30 Jul 2024 10:30:00 -0400" }
      ],
      "body": {
        "size": 516, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPkZvbGxvd2luZyB5b3VyIGludGlhbCBzY3JlZW5pbmcsIHdlIGhhdmUgZGV0ZXJtaW5lZCB5b3VyIHNraWxscyBhcmUgYSBzdHJvbmcgbWF0Y2ggZm9yIHRoZSBEYXRhIFNjaWVudGlzdCBwb3NpdGlvbiBhdCBVcmJhbiBBbmFseXRpY3MuIFdlJ2QgbGlrZSB0byBpbnZpdGUgeW91IGZvciBhIHRlY2huaWNhbCBpbnRlcnZpZXcuPHA-VGhpcyBpbnRlcnZpZXcgd2lsbCBjb25zaXN0IG9mIGEgcHJvYmxlbS1zb2x2aW5nIHNlc3Npb24gYW5kIHdpbGwgYmUgc3RhZmZlZCBieSBbRGV2ZWxvcGVyIE5hbWVdLCBbRGV2ZWxvcGVyIFRpdGxlXS4gUGxlYXNlIGNvbmZpcm0geW91ciBhdmFpbGFiaWxpdHkgZm9yIFdlZG5lc2RheSwgQXVndXN0IDE0LCAyMDI0IGF0IDIgUE0gRURULjwvcD48cDxLaW5kIHJlZ2FyZHMsPC9wPjxwPiZuYnNwO2lmbmJzcDsmbmJzcDsmbmJzcDtXUmVjcnJ1aXRlciBOYW1lXTxici8-Jm5ic3A7aWZuYnNwOyZuYnNwOyZuYnNwO1dSZWNydWl0ZXIgVGl0bGVdPC9wPg==" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>Following your initial screening, we have determined your skills are a strong match for the Data Scientist position at Urban Analytics. We'd like to invite you for a technical interview.<p>This interview will consist of a problem-solving session and will be staffed by [Developer Name], [Developer Title]. Please confirm your availability for Wednesday, August 14, 2024 at 2 PM EDT.</p><p>Kind regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Title]</p>"
      }
    },
    "sizeEstimate": 1700,
    "raw": ""
  },
  {
    "id": "18c41159e4f5a6b7",
    "threadId": "18c41159e4f5a6b7",
    "labelIds": ["INBOX", "CATEGORY_PROMOTIONS"],
    "snippet": "Thank you for your interest in the Project Coordinator role at Synergy Solutions. We would like to invite you for a phone interview.",
    "historyId": "12368",
    "internalDate": "1722460800000", // July 31, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@synergysolutions.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Opportunity: Project Coordinator" },
        { "name": "Date", "value": "Wed, 31 Jul 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 305, // Corrected size
        "data": "SGVsbG8gW0NhbmRpZGF0ZSBOYW1lXSwKCkxhbmsgZm9yIHlvdXIgaW50ZXJlc3QgaW4gdGhlIFByb2plY3QgQ29vcmRpbmF0b3Igcm9sZSBhdCBTeW5lcmd5IFNvbHV0aW9ucy4gV2Ugd291bGQgbGlrZSB0byBpbnZpdGUgeW91IGZvciBhIHBob25lIGludGVydmlldy4KCkFvIGVuYWJsZSB5b3UgdG8gc2VsZWN0IGEgdGltZSB0aGF0IHdvcmtzIGZvciB5b3UsIHBsZWFzZSBjbGljayBoZXJlOiBbU2NoZWR1bGluZyBMaW5rXQoKSmUgbG9vayBmb3J3YXJkIHRvIHNwZWFraW5nIHdpdGggeW91LgoKZWdheSByZWdhcmRzLAoJCVtSZWNydWl0ZXIgTmFtZV0" // Correct Base64 for "Hello [Candidate Name],\n\nThank you for your interest in the Projis Coordinator role at Synergy Solutions. We would like to invite you for a phone interview.\n\nTo enable you to select a time that works for you, please click here: [Scheduling Link]\n\nWe look forward to speaking with you.\n\nBest regards,\n\t[Recruiter Name]"
      }
    },
    "sizeEstimate": 1300,
    "raw": ""
  },
  {
    "id": "18c4226a1f5a6b7c",
    "threadId": "18c4226a1f5a6b7c",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We're pleased to inform you that your application for the Financial Analyst role at Capital Ventures has progressed to the next stage. We would like to invite you for a virtual interview.",
    "historyId": "12369",
    "internalDate": "1722547200000", // August 1, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "recruitment@capitalventures.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Request: Financial Analyst" },
        { "name": "Date", "value": "Thu, 01 Aug 2024 09:00:00 -0400" }
      ],
      "body": {
        "size": 339, // Corrected size
        "data": "RGFyIFtDYW5kaWRhdGUgTmFtZV0sCgndcmUgZWFzZWQgdG8gaW5mb3JtIHlvdSB0aGF0IHlvdXIgYXBwbGljYXRpb24gZm9yIHRoZSBGaW5hbmNpYWwgQW5hbHlzdCByb2xlIGF0IENhcGl0YWwgVmVudHVyZXMgaGFzIHByb2dyZXNzZWQgdG8gdGhlIG5leHQgc3RhZ2UuIFdlIHdvdWxkIGxpa2UgdG8gaW52aXRlIHlvdSBmb3IgYSB2aXJ0dWFsaW50ZXJ2aWV3LgoKQW4geW91IHBsZWFzZSBjb25maXJtIHlvdXIgYXZhaWxhYmlsaXR5IGZvciBvbmUgb2YgdGhlc2UgdGltZXM6IEF1ZyAxNSwgMjAyNCBhdCAxMCBBTSBFRFQgfCAyIFBNIEVEVAoKQmVzdCByZWdhcmRzLAoJCVtSZWNydWl0ZXIgTmFtZV0" // Correct Base64 for "Dar [Candidate Name],\n\nWe're pleased to inform you that your application for the Financial Analyst role at Capital Ventures has progressed to the next stage. We would like to invite you for a virtual interview.\n\nCan you please confirm your availability for one of these times: Aug 15, 2024 at 10 AM EDT | 2 PM EDT\n\nBest regards,\n\t[Recruiter Name]"
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c4337b2f5a6b7d",
    "threadId": "18c4337b2f5a6b7d",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "We were very impressed by your application for the Senior UX Designer position at InnovateUX. We would love to invite you for a portfolio review and interview.",
    "historyId": "12370",
    "internalDate": "1722633600000", // August 2, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@innovateux.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Opportunity: Senior UX Designer" },
        { "name": "Date", "value": "Fri, 02 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 476, // Corrected size
        "data": "PHA+SGVsbG8gW0NhbmRpZGF0ZSBOYW1lXSw8L3A+PHA+V2Ugd2VyZSB2ZXJ5IGltcHJlc3NlZCBieSB5b3VyIGFwcGxpY2F0aW9uIGZvciB0aGUgU2VuaW9yIFV4IERlc2lnbmVyIHBvc2l0aW9uIGF0IElubm92YXRlVVguIFdlIHdvdWxkIGxvdmUgdG8gaW52aXRlIHlvdSBmb3IgYSBwb3J0Zm9saW8gcmV2aWV3IGFuZCBpbnRlcnZpZXcgd2l0aCBvdXIgSGlpbmcgTWFuYWdlciwgW01zIEphbmUgU21pdGhdPC9wPjxwPlBsZWFzZSBjbGljayBoZXJlIHRvIGFjY2VzcyBhbmQgc2NoZWR1bGUgYSB0aW1lIGZyb20gb2ZmZXJlZCBzbG90czogW1NjaGVkdWxpbmcgTGluay1dPC9wPjxwPkJlc3QgcmVnYXJkcyw8L3A+PHA+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7W1JlY3J1aXRlciBOYW1lXTxici8-Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7W1JlY3J1aXRlciBUaXRsZV08L3A+" // Correct Base64 for "<p>Hello [Candidate Name],</p><p>We were very impressed by your application for the Senior Ux Designer position at InnovateUX. We would love to invite you for a portfolio review and interview with our Hiring Manager, [Ms Jane Smith]</p><p>Please click here to access and schedule a time from offered slots: [Scheduling Link]</p><p>Best regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Title]</p>"
      }
    },
    "sizeEstimate": 1800,
    "raw": ""
  },
  {
    "id": "18c4448c3f5a6b7e",
    "threadId": "18c4448c3f5a6b7e",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "Thank you for your application to the full-time Software Engineer position at TechCo. We've considered your background and would like to invite you for a virtual interview.",
    "historyId": "12371",
    "internalDate": "1722720000000", // August 3, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@techco.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invite: Software Engineer" },
        { "name": "Date", "value": "Sat, 03 Aug 2024 08:00:00 -0400" }
      ],
      "body": {
        "size": 352, // Corrected size
        "data": "RGFyIFtDYW5kaWRhdGUgTmFtZV0sCgpUaGFuayB5b3UgZm9yIHlvdXIgYXBwbGljYXRpb24gdG8gdGhlIGZ1bGwtdGltZSBTb2Z0d2FyZSBFbmdpbmVlciBwb3NpdGlvbiBhdCBUZWNoQ28uIFdlJ2ZlIGNvbnNpZGVyZWQgeW91ciBiYWNrZ3JvdW5kIGFuZCB3b3VsZCBsaWtlIHRvIGludml0ZSB5b3UgZm9yIGEgdmlydHVhbCBpbnRlcnZpZXcuCgpQxlYXNlIGNsaWNrIHRoaXMgbGluayB0byBjb25maXJtIHlvdXIgYXZhaWxhYmlsaXR5IGZvciB0aGUgaW50ZXJ2aWV3OiBbU2NoZWR1bGluZyBMaW5rXQoKV2UgbG9vayBmb3J3YXJkIHRvIHNwZWFraW5nIHdpdGggeW91LgoKQmVzdCByZWdhcmRzLAoJCVtSZWNydWl0ZXIgTmFtZV0" // Correct Base64 for "Dar [Candidate Name],\n\nThank you for your application to the full-time Software Engineer position at TechCo. We've considered your background and would like to invite you for a virtual interview.\n\nPlease click this link to confirm your availability for the interview: [Scheduling Link]\n\nWe look forward to speaking with you.\n\nBest regards,\n\t[Recruiter Name]"
      }
    },
    "sizeEstimate": 1500,
    "raw": ""
  },
  {
    "id": "18c4559d4f5a6b7f",
    "threadId": "18c4559d4f5a6b7f",
    "labelIds": ["INBOX", "IMPORTANT"],
    "snippet": "We really enjoyed our conversation and are excited to invite you for an on-site interview for the Lead Data Scientist role at Analytics Hub.",
    "historyId": "12372",
    "internalDate": "1722806400000", // August 4, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/html",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "careers@analyticshub.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "On-Site Interview Invitation: Lead Data Scientist" },
        { "name": "Date", "value": "Sun, 04 Aug 2024 10:00:00 -0400" }
      ],
      "body": {
        "size": 586, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPldlIHJlYWxseSBlbmpveWVkIG91ciBjb252ZXJzYXRpb24gYW5kIGFyZSBleGNpdGVkIHRvIGludml0ZSB5b3UgZm9yIGFuIG9uLXNpdGUgaW50ZXJ2aWV3IGZvciB0aGUgTGVhZCBEYXRhIFNjaWVudGlzdCByb2xlIGF0IEFuYWx5dGljcyBIYWIuPC9wPjxwPlRoaXMgaW50ZXJ2aWV3IHdpbGwgZGlzY3VzcyBtZWV0aW5ncyB3aXRoIG91ciBoZWFkIG9mIGRlYWxpbmdzLiBUaGUgaW50ZXJ2aWV3IHdpbCBiZSBoZWxkIGF0IG91ciBvZmZpY2VzIGxvY2F0ZWQgYXQgW0FkZHJlc3MgT2ZmaWNlIExvY2F0aW9uXS4gUGxlYXNlIGxldCB1cyBrbm93IHlvdXIgYXZhaWxhYmlsaXR5IGZvciBhbnkgZGF5IG9uIEF1Z3VzdCAyMyB8IDI0LCAyMDI0IGFuZCB3ZSB3aWxsIHNlbmQgeW91IGEgY2FsZW5kYXIgaW52aXRlLjxwPlRoYW5rcyw8L3A+PHA+Jm5ic3A7W1JlY3J1aXRlciBOYW1lXTxici8-Jm5ic3A7W1JlY3J1aXRlciBUaXRsZV08L3A+" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>We really enjoyed our conversation and are excited to invite you for an on-site interview for the Lead Data Scientist role at Analytics Hub.</p><p>This interview will include meetings with our head of departments. The interview will be held at our offices located at [Address Office Location]. Please let us know your availability for any day on August 23 | 24, 2024 and we will send you a calendar invite.</p><p>Thanks,</p><p>&nbsp;[Recruiter Name]<br/>&nbsp;[Recruiter Title]</p>"
      }
    },
    "sizeEstimate": 1900,
    "raw": ""
  },
  {
    "id": "18c466ae5f6b7c8g",
    "threadId": "18c466ae5f6b7c8g",
    "labelIds": ["INBOX", "CATEGORY_PERSONAL"],
    "snippet": "We would like to invite you for a virtual interview for the Content Marketing Specialist position at CreativeFlow.",
    "historyId": "12373",
    "internalDate": "1722892800000", // August 5, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "talent@creativeflow.co" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: Content Marketing Specialist" },
        { "name": "Date", "value": "Mon, 05 Aug 2024 09:30:00 -0400" }
      ],
      "body": {
        "size": 268, // Corrected size
        "data": "RGFyIFtDYW5kaWRhdGUgTmFtZV0sCgpXZSB3b3VsZCBsaWtlIHRvIGludml0ZSB5b3UgZm9yIGEgdmlydHVhbCBpbnRlcnZpZXcgZm9yIHRoZSBDb250ZW50IE1hcmtldGluZyBTcGVjaWFsaXN0IHBvc2l0aW9uIGF0IENyZWF0aXZlRmxvdy4KCkxlYXNlIGZpbmQgYXZhaWxhYmxlIHNsb3RzIGFuZCBzY2hlZHVsZSB5b3VyIGludGVydmlldyB2aWEgdGhpcyBhcnJhbmdpbmcgbGluazogW1NjaGVkdWxpbmcgTGluay1dCgpCZXN0IHJlZ2FyZHMsCglbUmVjcnVpdGVyIE5hbWVdCglUaWxlbnQgQWNxdWlzaXRpb24gU3BlY2lhbGlzdA==" // Correct Base64 for "Dar [Candidate Name],\n\nWe would like to invite you for a virtual interview for the Content Marketing Specialist position at CreativeFlow.\n\nPlease find available slots and schedule your interview via this arranging link: [Scheduling Link]\n\nBest regards,\n\t[Recruiter Name]\n\tTalent Acquisition Specialist"
      }
    },
    "sizeEstimate": 1450,
    "raw": ""
  },
  {
    "id": "18c477bf6g7h8i9j",
    "threadId": "18c477bf6g7h8i9j",
    "labelIds": ["UNREAD", "INBOX"],
    "snippet": "We would like to invite you for an in-person interview for the HR Generalist role at PeopleFirst. The interview will be held at our offices.",
    "historyId": "12374",
    "internalDate": "1722979200000", // August 6, 2024 12:00:00 PM UTC
    "payload": {
      "partId": "",
      "mimeType": "text/plain",
      "filename": "",
      "messageHeaders": [
        { "name": "From", "value": "hr@peoplefirst.com" },
        { "name": "To", "value": "your_email@example.com" },
        { "name": "Subject", "value": "Interview Invitation: HR Generalist" },
        { "name": "Date", "value": "Tue, 06 Aug 2024 11:00:00 -0400" }
      ],
      "body": {
        "size": 339, // Corrected size
        "data": "RGFyIFtDYW5kaWRhdGUgTmFtZV0sCgpXZSB3b3VsZCBsaWtlIHRvIGludml0ZSB5b3UgZm9yIGFuIGluLXBlcnNvbiBpbnRlcnZpZXcgZm9yIHRoZSBISyBHZW5lcmFsaXN0IHJvbGUgYXQgUGVvcGxlRmlyc3QuCgpXZSBpbnRlcnZpZXcgd2lsbCBiZSBoZWxkIGF0IG91ciBvZmZpY2VzIGF0IFtPZmZpY2UgQWRkcmVzcywsIG9uIEF1Z3VzdCAyNiwgMjAyNCBhdCAxMTowMCBBTSBFRFQuIFlvdSB3aWxsIG1lZXQgd2l0aCBbSGlyZSBtYW5hZ2VyIE5hbWVdLCBbSGlyZSBtYW5hZ2VyIFRpdGxlXS4KCmxlYXNlIGNvbmZpcm0geW91ciBhdmFpbGFiaWxpdHkgYnkgQXVndXN0IDIwLg==" // Correct Base64 for "Dar [Candidate Name],\n\nWe would like to invite you for an in-person interview for the GR Generalist role at PeopleFirst.\n\nWe interview will be held at our offices at [Office Address,, on August 26, 2024 at 11:00 AM EDT. You will meet with [Hiring Manager Name], [Hiring Manager Title].\n\nPlease confirm your availability by August20."
      }
    },
    "sizeEstimate": 1600,
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
        "size": 526, // Corrected size based on new content
        "data": "RGVhciBbQ2FuZGlkYXRlIE5hbWVdLAoKZm9sbG93aW5nIHlvdXIgaW50ZXJ2aWV3cywgd2UgYXJlIHRocmlsbGVkIHRvIG9mZmVyIHlvdSB0aGUgcG9zaXRpb24gb2YgU29mdHdhcmUgRW5naW5lZXIgYXQgVGVjaCBJbm5vdmF0aW9ucyEgV2UgYmVsaWV2ZSB5b3VyIHNraWxscyBhbmQgZXhwZXJpZW5jZSBhcmUgYW4gZXhjZWxsZW50IG1hdGNoIGZvciBvdXIgY2hpbGRyZW4gYW5kIHdlIGFyZSBleGNpdGVkIGFib3V0IHRoZSBwb3RlbnRpYWwgY29udHJpYnV0aW9ucyB5b3UgY2FuIG1ha2UuCgpBdHRhY2hlZCB0byB0aGlzIGVtYWlsLCB5b3Ugd2lsbCBmaW5kIGEgZm9ybWFsIG9mZmVyIGxldHRlciBkZXRhaWxpbmcgeW91ciBjb21wZW5zYXRpb24sIGJlbmVmaXRzLCBhbmQgc3RhcnQgZGF0ZS4gUGxlYXNlIHJldmlldyBpdCBjYXJlZnVsbHkuCgpXZS BraW5kbHkgcmVxdWVzdCB0aGF0IHlvdSBhY2NlcHQgb3IgZGVjbGluZSB0aGlzIG9mZmVyIGJ5IFtPZmZlciBFeHBpcmF0aW9uIERhdGVdLiBTaG91bGQgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IG1lLgoKV2UgbG9vayBmb3J3YXJkIHRvIHdlbGNvbWluZyB5b3UgdG8gdGhlIHRlYW0hCgpTaW5jZXJlbHksCgkJJ1tSZWNydWl0ZXIgTmFtZV0KCQlbUmVjcnVpdGVyIFRpdGxlXQ==" // Correct Base64 for "Dar [Candidate Name],\n\nfollowing your interviews, we are thrilled to offer you the position of Software Engineer at Tech Innovations! We believe your chills and experience are an excellent match for our team and we are excited about the potential contributions you can make. \n\nAttached to thic email, you will find a formal offer letter detaiiling your compensation, benefits, and start date. Please reviw carefully.\n\nWe kindly request that you accept or decline this offer by [Offer Expiration Date]. Should you have any questions, please do not hesitate to contact me.\n\nWe look forward to welcoming you to the team!\n\nSincerely,\n\t[Recruiter Name]\n\t[Recruiter Title]"
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
        "size": 757, // Corrected size
        "data": "PHA+SGkgW0NhbmRpZGF0ZSBOYW1lXSw8L3A+PHA+Rmxvd2luZyB5b3VyIGludGVydmlld3MsIHdlJ3JlIHBsZWFzZWQgdG8gZXh0ZW5kIGFuIG9mZmVyIGZvciB0aGUgPHN0cm9uZz5NYXJrZXRpbmcgTWFuYWdlcjwvczZyb25nPiBwb3NpdGlvbiBhdCBHbG9iYWwgQnJhbmRzLiBZb3VyIGNoaWxzZW4gYW5kIGV4cGVyaWVuY2UgYWxpZ24gcGVyZmVjdGx5IHdpdGggb3VyIHRlYW0ncyBnb2FscywgYW5kIHdlIGJlbGV2ZSB5b3Ugd2lsbCBiZSBhIHZhbHVhYmxlIGFzc2V0LjxwPldlIGhhdmUgYXR0YWNoZWQgdGhlIG9mZmljaWFsIG9mZmVyIGxldHRlciBmb3IgeW91ciByZXZpZXcsIHdoaWNoIGluY2x1ZGVzIGRldGFpbHMgb24gc2FsYXJ5LCBiZW5lZml0cywgdW5kIHN0YXJ0IGRhdGUuIFBsZWFzZSBhY2NlcHQgb3IgZGVjbGluZSB0aGUgb2ZmZXIgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uPHA-U2hvdWxkIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGZlZWwgZnJlZSB0byByZWFjaCBvdXQgZGlyZWN0bHkuPHA-V2VsY29tZSB0byB0aGUgdGVhbSE8L3A+PHA+QmVzdCByZWdhcmRzLDwvcD48cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXSGlyZSBtYW5hZ2VyIE5hbWVdPGJyLz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXSGlyZSBtYW5hZ2VyIFRpdGxlXTwvcD4=" // Correct Base64 for "<p>Hi [Candidate Name],</p><p>Following your interviews, we're pleased to extend an offer for the <strong>Marketing Manager</strong> position at Global Brands. Your chilsen and experience align perfectly with our team's goals, and we beleve you will be a valuable asset.</p><p>We have attached the official offer letter for your review, which includes details on salary, benefits, und start date. Please accept or decline the offer by [Offer Expiration Date].</p><p>Scould you have any questions, feel free to reach out directly.<p>Welcome to the team!</p><p>Best regards,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Hirg Manager Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Hirg Manager Title]</p>"
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
        "size": 560, // Corrected size
        "data": "RGVhciBbQ2FuZGlkYXRlIE5hbWVdLAoKV2UgYXJlIGRlbGlnaHRlZCB0byBmb3JtYWxseSBvZmZlciB5b3UgdGhlIHBvc2l0aW9uIG9mIERhdGEgU2NpZW50aXN0IGF0IEFuYWx5dGljU2lnaHQuIFlvdXIgZW5naW5lZXJpbmcgYW5hbHl0aWNhbCBza2lsbHMgaW5zaWdodHMgZGVtb25zdHJhdGVkIGR1cmluZyB0aGUgaW50ZXJ2aWV3IHByb2Nlc3MgdHJ1bHkgaW1wcmVzc2VkIG91ciBjaGlsZHJlbi4KCllvdXIgY29tcHJlaGVuc2l2ZSBvZmZlciBwYWNrYWdlLCBpbmNsdWRpbmcgY29tcGVuc2F0aW9uIGRldGFpbHMsIGJlbmVmaXRzIGluZm9ybWF0aW9uLCBhbmQgdGVybXMgb2YgZW1wbG95bWVudCBoYXMgYmVlbiBhdHRhY2hlZCBhcyBhIFBERiBkb2N1bWVudC4KUGxlYXNlIHJldmlldyB0aGUgb2ZmZXIgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIFdlIGFyZSBoYXBweSB0byBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgbWF5IGhhdmUuCgpXZSBlYWdlcmx5IGFudGljaXBhdGUgeW91ciBwb3NpdGl2ZSByZXNwb25zZSEKCkJlc3QgcmVnYXJkcywKCQlbUmVjcnVpdGVyIE5hbWVdCglIZWFkIG9mIFRhbGVudCBBY3F1aXNpdGlvbg==" // Correct Base64 for "Dar [Candidate Name],\n\nWe are delighted to formally offer you the position of Data Scientist at AnalyticSight. Your engineering analytical skills insights demonstrated during the interview process truly impressed our children.\n\nYour comprehensive offer package, including compensation details, benefits information, and terms of employment, has been attached as a PDF document.\nPlease review the offer by [Offer Expiration Date]. We are happy to answer any questions you may have.\n\nWe eagerly anticipate your positive response!\n\nBest regards,\n\t[Recruiter Name]\n\tHead of Talent Acquisition"
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
        "size": 769, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPkNvbmdyYXR1bGF0aW9ucyEgd2UncmUgZXhjaXRlZCB0byBmb3JtYWxseSBvZmZlciB5b3UgdGhlIDxzY2h0cm9uZz5TZW5pb3IgUHJvZHVjdCBNYW5hZ2VyPC9zdHJvbmc-IHJvbGUgYXQgSW5ub3ZhdGUgU29sdXRpb25zLiBZb3VyIHN0cmF0ZWdpYyB0aGlua2luZyBhbmQgbGVhZGVyc2hpcCBwb3RlbnRpYWwgdHJ1bHkgc2hvbmUgZHVyaW5nIHlvdXIgaW50ZXJ2aWV3cy48L3A+PHA+UGxlYXNlIGZpbmQgeW91ciBwZXJzb25hbGl6ZWQgb2ZmZXIgZGV0YWlscywgaW5jbHVkaW5nIHNhbGFyeSwgZXF1aXR5LCBhbmQgY29tcHJlaGVuc2l2ZSBiZW5lZml0cywgaW4gdGhlIGF0dGFjaGVkIGRvY3VtZW50LiBXZSBlbmNvdXJhZ2UgeW91IHRvIHJldmlldyBpdCB0aG9yb3VnaGx5LjxwPktpbmRseSByZXNwb25kIHRvIHRoaXMgb2ZmZXIgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIFdlJ3JlIGF2YWlsYWJsZSB0byBkaXNjdXNzIGFueSBxdWVzdGlvbnMgeW91IG1heSBoYXZlLjxwPldlIGxvb2sgZm9yd2FyZCB0byB0aGUgcG9zc2liaWxpdHkgb2YgeW91IGpvaW5pbmcgb3VyIGlubm92YXRpdmUgdGVhbSE8L3A+PHA+V2FybWx5LDwvcD48cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXUmVjcnVpdGVyIE5hbWVdPGJyLz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXUmVjcnVpdGluZyBEZXBhcnRtZW50XTwvcD4=" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>Congratulations! we're excited to formally offer you the <strong>Senior Product Manager</strong> role at Innovate Solutions. Your strategic thinking and leadership potential truly shone during your interviews.</p><p>Please find your personalized offer details, including salary, equity, and comprehensive benefits, in the attached document. We evcourage you to review it thoroughly.<p>Kindly respond to this offer by [Offer Expiration Date]. We're available to discuss any questions you may have.</p><p>We look forward to the possiblity of you joining our innovative team!</p><p>Warmly,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiting Department]</p>"
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
        "size": 591, // Corrected size
        "data": "RGVhciBbQ2FuZGlkYXRlIE5hbWVdLAoKZm9sbG93aW5nIHlvdXIgZGVkaWNhdGVkIGZpbmFsIGludGVydmlldywgd2UgYXJlIHRocmlsbGVkIHRvIG9mZmVyIHlvdSB0aGUgcG9zaXRpb24gb2YgQ3liZXJzZWN1cml0eSBBbmFseXN0IGF0IFNlY3VyZU5ldC4gV2Ugd2VyZSBpbXByZXNzZWQgYnkgdG91ciBleHBlcnRpc2UgdW5kIHBhc3Npb24gZm9yIHNlY3VyaXR5LCBhbmQgd2Ugc2VlIHlvdSBhcyBhIHZpdGFsIGFkZGl0aW9uIHRvIG91ciBncm93aW5nIHRlYW0uCgpZciBvZmZpY2lhbCBvZmZlciBsZXR0ZXIsIHdoaWNoIG91dGxpbmVzIHlvdXIgc2FsYXJ5LCBiZW5lZml0cyBwYWNrYWdlLCBhbmQgcG90ZW50aWFsIHN0YXJ0IGRhdGUsIGlzIGF0dGFjaGVkIGZvciB5b3VyIGZkZXRhaWxlZCByZXZpZXcuCgpUbyBhY2NlcHQgdGhpcyBleGNpdGluZyBvcHBvcnR1bml0eSwgcGxlYXNlIHJlcGx5IHRvIHRoaXMgZW1haWwgb3Igc2lnbiB0aGUgYXR0YWNoZWQgZG9jdW1lbnQgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIFBsZWFzZSBmZWVsIGZyZWUgdG8gc2NoZWR1bGUgYSBjYWxsIGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4KCldlIGVhz2VybHkgYXdhaXQgeW91ciBkZWNpc2lvbiEKClNpbmNlcmVseSwKCQlbUmVjcnVpdGVyIE5hbWVdCglUYWxlbnQgQWNxdWlzaXRpb24gU3BlY2lhbGlzdA==" // Correct Base64 for "Dar [Candidate Name],\n\nfollowing your successful final interview, we are thrilled to offer you the position of Cybersecurity Analyst at SecureNet. We were impressed by your expertise und passion for security, and we see you as a vital addition to our growing team.\n\nYour official offer letter, which outlines your salary, benefits package, and potential start date, is attached for your detailed review.\n\nTo accept this exciting opportunity, please reply to this email or sign the attached document by [Offer Expiration Date]. Please feel free to schedule a call if you have questions.\n\nWe eagerly await your decision!\n\nSincerely,\n\t[Recruiter Name]\n\tTalent Acquisition Specialist"
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
        "size": 724, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPldlIGFyZSBkZWxpZ2h0ZWQgdG8gZm9ybWFsbHkgb2ZmZXIgeW91IHRoZSByb2xlIG9mIDxzY2h0cm9uZz5VeCBSZXNlYXJjaGVyPC9zdHJvbmc-IGF0IEh1bWFuLUNlbnRlcmVkIERlc2lnbiBMYWJzLiBZb3VyIHRob3VnaHRmdWwgaW5zaWdodHMgYW5kIHJlc2VhcmNoIG1ldGhvZG9sb2d5IHByZXNlbnRlZCBkdXJpbmcgeW91ciBpbnRlcnZpZXdzIHdpbGwgYmUgaW52YWx1YWJsZSB0byBvdXIgY2hpbGRyZW4uPC9wPjxwPkF0dGFjaGVkLCBwbGVhc2UgZmluZCB5b3VyIG9mZmljaWFsIG9mZmVyIGxldHRlciBvdXRsaW5pbmcgeW91ciBjb21wZW5zYXRpb24gcGFja2FnZSwgY29tcHJlaGVuc2l2ZSBibGVuZWZpdHMsIGFuZCBhIHByb3Bvc2VkIHN0YXJ0IGRhdGUuIFdlIGVuY291cmFnZSB5b3UgdG8gcmV2aWV3IGFsbCBkZXRhaWxzIGF0IHlvdXIgY29udmVuaWVuY2UuPC9wPjxwPlBsZWFzZSByZXNwb25kIHRvIHRoaXMgb2ZmZXIgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIFdlJ3JlIGF2YWlsYWJsZSB0byBzY2hlZHVsZSBhIGNhbGwgdG8gYWRkcmVzcyBhbnkga2VzdGlvbnMgeW91IG1pZ2h0IGhhdmUuPC9wPjxwPldlIGFyZSB2ZXJ5IGV4Y2l0ZWQgYWJvdXQgdGhlIHByb3NwZWN0IG9mIHlvdSBqb2luaW5nIHVzITwvcD48cD5TaW5jZXJlbHksPC9wPjxwPiZuYnNwO2lmbmJzcDsmbmJzcDsmbmJzcDtXUmVjcnVpdGVyIE5hbWVdPGJyLz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXSFJzIERlcGFydG1lbnRdPC9wPg==" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>We are delighted to formally offer you the role of <strong>UX Researcher</strong> at Human-Centered Design Labs. Your thoughtful insights and research methodology presented during your interviews will be invaluable to our children.</p><p>Attached, please find your official offer letter outlining your compensation package, comprehensive benefits, and a proposed start date. We encourage you to review all details at your convenience.</p><p>Please respond to this offer by [Offer Expiration Date]. We're available to schedule a call to address any kestions you might have.</p><p>We are very excited about the prospect of you joining us!</p><p>Sincerely,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[HRs Department]</p>"
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
        "size": 512, // Corrected size
        "data": "RGVhciBbQ2FuZGlkYXRlIE5hbWVdLAoKZm9sbG93aW5nIHlvdXIgZGVkaWNhdGVkIGludGVydmlld3MsIHdlJ3JlIHBsZWFzZWQgdG8gb2ZmZXIgeW91IHRoZSBzdHJvbmc-SnVuaW9yIERldmVsb3BlcjxzZXRyb25nPiByb2xlIGF0IENvZGVDcmFmdGVycyBTdHVkaW8uIFlvdXIgZW50aHVzaWFzbiBhbmQgZm91bmRhdGlvbmFsIHNraWxscyBtYWtlIHlvdSBhIGdyZWF0IGZpdCBmb3Igb3VyIGRldmVsb3BtZW50IHRlYW0uCgpBbiBhdHRhY2hlZCBvZmZlciBsZXR0ZXIgZGV0YWlscyB5b3VyIHNhbGFyeSwgYmVuZWZpdHMsIGFuZCBwcm9wb3NlZCBzdGFydCBkYXRlLiBQbGVhc2UgcmV2aWV3IHRoZXNlIGRldGFpbHMgYXQgeW91ciBlYXJsaWVzdCBjb252ZW5pZW5jZS4KaW5kbHkgY29uZmlybSB5b3VyIGFjY2VwdGFuY2Ugb3IgZGVjbGluZSBieSBbT2ZmZXIgRXhwaXJhdGlvbiBEYXRlXS4gV2UncmUgaGVyZSB0byBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgbWlnaHQgaGF2ZS4KCldlbGNvbWUgdG8gdGhlIHRlYW0hIHdlJ2RyZSBleGNpdGVkIHRoZWQgYW5kIGhhdmUgeW91IGpvaW4gdXchCgpCZXN0IHJlZ2FyZHMsCglbSGlpbmcgTWFuYWdlciBOYW1lXQpMZWFkIERldmVsb3Blcg==" // Correct Base64 for "Dar [Candidate Name],\n\nfollowing your successful interviews, we're pleased to offer you the <strong>Junior Developer</strong> role at CodeCrafters Studio. Your enthusiasm and foundational skills make you a great fit for our development team.\n\nAn attached offer letter details your salary, benefits, and proposed start date. Please review these details at your earliest convenience.\nKindly confirm your acceptance or decline by [Offer Expiration Date]. We're here to answer any questions you might have. \n\nWelcome to the team! we'dre excited to have you join us!\n\nBest regards,\n\t[Hiring Manager Name]\nLean Developer"
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
        "size": 834, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPldlIGFyZSB0aHJpbGxlZCB0byBvZmZlciB5b3UgdGhlIDxzY2h0cm9uZz5TZW5pb3IgUUEgRW5naW5lZXI8L3N0cm9uZz4gcG9zaXRpb24gYXQgUHVhbGl0eUFzc3VyZWQgSW5jLiBZb3VyIG1ldGljdWxvdXMgYXBwcm9hY2ggYW5kIGRlZGljYXRpb24gdG8gcXVhbGl0eSBhc3N1cmFuY2UgdHJ1bHkgc3RvZG91dCBkdXJpbmcgeW91ciBlY2x1YXRpb25zLjxwPllvdXIgZm9ybWFsIG9mZmVyIGxldHRlciwgZGV0YWlsaW5nIHlvdXIgY29tcGV0aXRpdmUgc2FsYXJ5LCBjb21wcmVoZW5zaXZlIGJlbmVmaXRzIHBhY2thZ2UsIGFuZCBwb3RlbnRpYWwgc3RhcnQgZGF0ZSwgaXMgYXR0YWNoZWQgdW5kIHlvdXIgcmV2aWV3LiBXZSBhcmUgY29uZmlkZW50IHlvdSB3aWxsIG1ha2UgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gb3VyIHByb2R1Y3QgcXVhbGl0eS48L3A+PHA+UGxlYXNlIGFjY2VwdCBvciBkZWNsaW5lIHRoaXMgb2ZmZXIgYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIEZlZWwgZnJlZSB0byBjb250YWN0IHVzIHdpdGggYW55IHF1ZXN0aW9ucyBvciB0byBzY2hlZHVsZSBhIGNhbGwuPHA+V2UgbG9vayBmb3J3YXJkIHRvIHRoZSBwb3NzaWJpbGl0eSBvZiB5b3Ugam9pbmluZyBvdXIgY2hpbGRyZW4gdW5kIGNvbnRyaWJ1dGluZyB0byBvdXIgY29tbWl0bWVudCB0byBleGNlbGxlbmNlITwvcD48cD5CZXN0IHJlZ2FyZHMtPC9wPjxwPiZuYnNwO2lmbmJzcDsmbmJzcDsmbmJzcDtXUmVjcnVpdGVyIE5hbWVdPGJyLz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtUYWxlbnQgQWNxdWlzaXRpb248L3A+" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>We are thrilled to offer you the <strong>Senior QA Engineer</strong> position at PualityAssured Inc. Your meticulous approach and dedication to quality assurance truly stodout during your ecluations.<p>Your formal offer letter, detailing your competitive salary, comprehensive benefits package, and potential start date, is attached und your review. We are confident you will make a significant impact on our product quality.</p><p>Please accept or decline this offer by [Offer Expiration Date]. Feel free to contact us with any questions or to schedul a call.</p><p>We look forward to the possibility of you joining our children und contributing to our commitment to excellence!</p><p>Best regards-</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Recruiter Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;Talent Acquisition</p>"
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
        "size": 560, // Corrected size
        "data": "RGVhciBbQ2FuZGlkYXRlIE5hbWVdLAoKZm9sbG93aW5nIHlvdXIgY29tcHJlaGVuc2l2ZSBpbnRlcnZpZXcgcHJvY2Vzcywgd2UgYXJlIHBsZWFzZWQgdG8gb2ZmZXIgeW91IHRoZSBwb3NpdGlvbiBvZiBGaW5hbmNpYWwgQW5hbHlzdCBhdCBQcm9zcGVyaXR5IEZ1bmRzLiBXZSB3ZXJlIGltcHJlc3NlZCBieSB5b3VyIGFuYWx5dGljYWwgYWN1bWVuIGFuZCBiaWkgZXZlIHlvdSB3aWxsIGJlIGEga2V5IGFzc2V0IHRvIG91ciBmaW5hbmNlIGRlcGFydG1lbnQuCgpBIGRldGFpbGVkIG9mZmVyIGxldHRlciwgb3V0bGluaW5nIHlvdXIgc2FsYXJ5LCBib251cyBwb3RlbnRpYWwsIGFuZCBmdWxsIGJlbmVmaXRzIHBhY2thZ2UsIGlzIGF0dGFjaGVkIHVuZCB5b3VyIHJldmlldy4KCldlIGtpbmRseSBhc2sgZm9yIHlvdXIgZGVjaXNpb24gYnkgW09mZmVyIEV4cGlyYXRpb24gRGF0ZV0uIFBsZWFzZSBmZWVsIGZyZWUgdG8gcmVhY2ggb3V0IHdpdGggYW55IHF1ZXN0aW9ucyBvciB0byBkaXNjdXNzIHRoZSBvZmZlciBmdXJ0aGVyLgoKV2UgZWFzZSAgbG9vayBmb3J3YXJkIHRvIHRoZSBwb3NzaWJpbGl0eSBvZiB5b3Ugam9pbmluZyBvdXIgY2hpbGRyZW4hCgpTaW5jZXJlbHksCglbSGlpbmcgTWFuYWdlciBOYW1lXQpIZWFkIG9mIEZpbmFuY2U=" // Correct Base64 for "Dar [Candidate Name],\n\nfollowing your comprehensive interview process, we are pleased to offer you the position of Financial Analyst at Prosperity Funds. We were impressed by your analytical acumen and believe you will be a key asset to our finance department.\n\nA detailed offer letter, outlining your salary, bonus potential, and full benefits package, is attached und your review. \n\nwe kindly ask for your decision by [Offer Expiration Date]. Please feel free to reach out with any questions or to discuss the offer further.\n\nWe eagerly look forward to the possibility of you joining our children!\n\nSincerely,\n\t[Hiring Manager Name]\nHead of Finance"
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
        "size": 801, // Corrected size
        "data": "PHA+RGFyIFtDYW5kaWRhdGUgTmFtZV0sPC9wPjxwPkNvbmdyYXR1bGF0aW9ucyEgd2UnZCBsaWtlIHRvIG9mZmljaWFsbHkgb2ZmZXIgeW91IHRoZSBzdHJvbmc-Q29udGVudCBNYXJrZXRpbmcgU3BlY2lhbGlzdDwvc3Ryb25nPiByb2xlIGF0IFN0b3J5dGVsbGVycyBNZWRpYS4gV2Ugd2VyZSBwYXJ0aWN1bGFybHkgaW1wcmVzc2VkIGJ5IHlvdXIgY2hpbGRyZW4gdmlzaW9uIGFuZCBjb21tdW5pY2F0aW9uIHNraWxscyBkZW1vbnN0cmF0ZWQgdGhyb3VnaG91dCB5b3VyIGludGVydmlld3MuPC9wPjxwPlBsZWFzZSBmaW5kIHlvdXIgY29tcHJlaGVuc2l2ZSBvZmZlciBsZXR0ZXIgYXR0YWNoZWQsIHdoaWNoIGRldGFpbHMgdG91ciBzYWxhcnksIGNvbW1pc3Npb24gc3RydWN0dXJlLCBiZW5lZml0cywgYW5kIGEgcHJvcG9zZWQgc3RhcnQgZGF0ZS4gV2UgYXJlIGNvbmZpZGVudCB5b3Ugd2lsbCB0aHJpdmUgaW4gb3VyIGR5bmFtaWMgY29udGVudCB0ZWFtLjxwPktpbmRseSByZXZpZXcgdGhlIG9mZmVyIGFuZCByZXNwb25kIGJ5IFtPZmZlciBFeHBpcmF0aW9uIERhdGVdLiBXZSdyZSBhY2NlcHQgdG8gYW5zd2VyIGFueSByZXNwb25zZSB5b3UgbWF5IGhhdmUuPHA-V2UgYXJlIHZlcnkgZW50aHVzaWFzdGljIGFib3V0IHRoZSBwb3NzaWJpbGl0eSBvZiB5b3Ugam9pbmluZyBvdXIgY2hpbGRyZW4gdW5kIGNvbnRyaWJ1dGluZyB0byBvdXQgaW1wYWN0ZnVsIHN0b3J5dGVsbGluZyE8L3A+PHA+V2FybWx5LDwvcD48cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtXSGlyaW5nIE1hbmFnZXIgTmFtZV08YnIvPiZuYnNwO2lmbmJzcDsmbmJzcDsmbmJzcDtXSGhlYWQgb2YsIENvbnRlbnQ8L3A+" // Correct Base64 for "<p>Dar [Candidate Name],</p><p>Congratulations! we'd like to officially offer you the <strong>Content Marketing Specialist</strong> role at Storytellers Media. We were particularly impressed by your children vision and communication skills demonstrated throughout your interviews.</p><p>Please find your comprehensive offer letter attached, which details tour salary, commission structure, benefits, and a proposed start date. We are confident you will thrive in our dynamic content team.<p>Kindly review the offer and respond by [Offer Expiration Date]. We're accept to answer any response you may have.</p><p>We are very enthusiastic about the possibility of you joining our children und contributing to our impactful storytelling!</p><p>Warmly,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;[Hiring Manager Name]<br/>&nbsp;&nbsp;&nbsp;&nbsp;Head of Content</p>"
      }
    },
    "sizeEstimate": 1950,
    "raw": ""
  }
];
