let appData = {
        name: 'Gmail App',
        mailboxes: [
          {
            name: 'Inbox',
            emails: [
              {
                subject: 'Did You Hear The New Memo?',
                body: 'Hey, did you happen to hear the new memo today?',
                sender: 'yourCoworker@gmail.com',
                receiver: 'youEmail@gmail.com',
                date: '6/19/24',
                status: 'Read'
              },
              {
                subject: 'Good Seeing You',
                body: 'It was good seeing you son!',
                sender: 'yourDad@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/17/24',
                status: 'Unread'
              },
              {
                subject: 'Miss You Too',
                body: 'Miss you!',
                sender: 'yourMom@gmail.com',
                receiver: 'yourEmai@gmail.com',
                date: '6/17/24',
                status: 'Unread'
              },
              {
                  subject: 'For Sure',
                  body: 'We need to hang out again soon.',
                  sender: 'yourBrother@gmail.com',
                  receiver: 'yourEmail@gmail.com',
                  date: '6/16/24',
                  status: 'Unread'
              }
            ]
          },
          {
            name: 'Starred',
            emails: [
              {
                subject: 'New Due Date',
                body: 'Just wanted to let you know there is a new due date for the project. Please get back to me as soon as you can.',
                sender: 'yourBoss@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/18/24',
                status: 'Read'
              },
              {
                subject: 'New Work Schedule',
                body: 'Below is the new schedule for the next work week...',
                sender: 'yourBoss@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/19/24',
                status: 'Read'
              }
            ]
          },
          {
            name: 'Snoozed',
            emails: [
              {
                subject: 'Save$$$NOW',
                body: 'We would like to offer you a new coupon! Claim now!',
                sender: 'localStore@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/15/24',
                status: 'Snoozed'
              },
              {
                subject: 'Notifications',
                body: 'You have 5 new notifications on your social media!',
                sender: 'yourSocials@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/15/24',
                status: 'Snoozed'
              },
              {
                subject: 'New Google Login',
                body: 'A new device "yourNewLaptop" has logged into your Google Account',
                sender: 'Google@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/15/24',
                status: 'Snoozed'
              }
            ]
          },
          {
            name: 'Sent',
            emails: [
              {
                subject: 'New Due Date',
                body: 'Understood, thank you for the heads up.',
                sender: 'yourBoss@gmail.com',
                receiver: 'yourEmail@gmail.com',
                date: '6/18/24',
                status: 'Sent'
              },
              {
                subject: 'New Work Schedule',
                body: 'Thank you for the heads up! I will put it in my calendar.',
                sender: 'yourEmail@gmail.com',
                receiver: 'yourBoss@gmail.com',
                date: '6/19/24',
                status: 'Sent'
              },
              {
                subject: 'Did you hear the new memo?',
                body: 'Yes I did do you need a copy?',
                sender: 'yourEmail@gmail.com',
                receiver: 'yourCoworker@gmail.com',
                date: '6/29/24',
                status: 'Sent'
              }
            ]
          },
          {
            name: 'Drafts',
            emails: [
              {
                subject: 'Good Seeing You',
                body: 'Good seeing you too dad! We need to do that again some time.',
                sender: 'yourEmail@gmail.com',
                receiver: 'yourDad@gmail.com',
                date: '5/24/24',
                status: 'Not Sent'
              },
              {
                subject: 'Miss You Too',
                body: 'Miss you too mom! I will come and visit soon.',
                sender: 'yourEmail@gmail.com',
                receiver: 'yourMom@gmail.com',
                date: '6/15/24',
                status: 'Not Sent'
              },
              {
                subject: 'For Sure',
                body: 'For sure, we will plan a hangout soon.',
                sender: 'yourEmail@gmail.com',
                receiver: 'yourBrother@gmail.com',
                date: '6/18/24',
                status: 'Not Sent'
              }
            ]
          },
          {
                name: 'Spam',
                emails: [
                  {
                    subject: 'Cars Extended Warranty',
                    body: 'Hello, this is a notice about your cars extended warranty. You may be elligable for compensation, click here =>...',
                    sender: 'Scamemer@gmail.com',
                    receiver: 'yourEmail@gmail.com',
                    date: '4/5/24',
                    status: 'Spam'
                  },
                  {
                    subject: 'I Need Your Help',
                    body: 'Hello I am a wealthy prince and due to a delay at the airport I need your help transferring my funds. In exchange for your service I will pay you handsomely.',
                    sender: 'that1Prince@gmail.com',
                    receiver: 'yourEmail@gmail.com',
                    date: '1/12/24',
                    status: 'Spam'
                  },
                  {
                    subject: 'Bad Luck',
                    body: 'Looks like you are unlucky. Forward this email to 30 people or have bad luck forever.',
                    sender: 'Scammer@gmail.com',
                    receiver: 'yourEmail@gmail.com',
                    date: '11/18/23',
                    status: 'Spam'
                  }
                ]   
          },
          {
                name: 'Trash',
                emails: [
                  {
                    subject: 'Long Time No See',
                    body: 'Hey, remember me from class? Here is my socials so we can talk more...',
                    sender: 'Phisher@gmail.com',
                    receiver: 'yourEmail.com',
                    date: '5/11/24',
                    status: 'Trashed'
                  },
                  {
                    subject: 'VIRUS!',
                    body: 'Your device has 15 viruses. Click the link and follow the instructions to remove them',
                    sender: 'Malware@gmail.com',
                    receiver: 'yourEmail.com',
                    date: '4/9/24',
                    status: 'Trashed'
                  },
                  {
                    subject: 'Gmail Verification Code',
                    body: 'Your new Google verification code is 298713.  Do not share this code and delete after use.',
                    sender: 'GoogleSupport@gmail.com',
                    receiver: 'yourEmail.gmail.com',
                    date: '3/15/23',
                    status: 'Trashed'
                  }
                ]
          }
        ],
        contacts: [
          {
            name: 'Dad',
            email: 'yourDad@gmail.com',
            lastMessage: 'It was good seeing you son!'
          },
          {
            name: 'Mom',
            email: 'yourMom@gmail.com',
            lastMessage: 'Miss you!'
          },
          {
            name: 'Brother',
            email: 'yourBrother@gmail.com',
            lastMessage: 'We need to hang out again soon.'
          }
        ]
      };
      
      
      let mailboxNames = appData.mailboxes.map(mailbox => mailbox.name);
      console.log("mailboxNames", mailboxNames);
      
    
      let emailsList = [];
      appData.mailboxes.forEach(mailbox => {
        emailsList = emailsList.concat(mailbox.emails);
      });
      console.log("emailList", emailsList);
      
    
      let secondEmailText = appData.mailboxes.find(mailbox => mailbox.name === 'Inbox').emails[1].body;
      console.log("secondEmailText", secondEmailText);
      
    
      let draftEmail = appData.mailboxes.find(mailbox => mailbox.name === 'Drafts').emails.pop();
      draftEmail.status = 'Sent';
      appData.mailboxes.find(mailbox => mailbox.name === 'Sent').emails.push(draftEmail);
      console.log("Updated Mailboxes", appData.mailboxes);
      
     
     let newDraftEmail = {
        subject: 'Just Touching Base',
        body: 'Just touching base with you and letting you know I went ahead and both finalized the project and marked the new date in my calendar.',
        sender: 'yourEmail.gmail.com',
        receiver: 'yourBoss@gmail.com',
        date: '6/19/24',
        status: 'Draft'
      };
      appData.mailboxes.find(mailbox => mailbox.name === 'Drafts').emails.push(newDraftEmail);
      console.log("UpdatedDrafts", appData.mailboxes.find(mailbox => mailbox.name === 'Drafts').emails);
      