const schema = [
  {
    question_id: "1",
    question_text: "Are you a first-time home buyer? ",
    question_type: "radio",
    required: "1",
    options: [
      {
        option_id: "1",
        option_text: "Buyer",
      },
      {
        option_id: "2",
        option_text: "Investor",
      },
    ],
  },
  {
    question_id: "2",
    question_text:
      "Please enter your phone number if you didn’t add it during account creation",
    question_type: "field",
    required: "1",
    options: [],
  },
  {
    question_id: "3",
    question_text: "Are you open to a partnership?",
    question_type: "radio",
    required: "1",
    options: [
      {
        option_id: "3",
        option_text: "Yes",
      },
      {
        option_id: "4",
        option_text: "No",
      },
      {
        option_id: "5",
        option_text: "Not Sure",
      },
    ],
  },
  {
    question_id: "4",
    question_text: "Do you already have existing partners?",
    question_type: "radio",
    required: "1",
    options: [
      {
        option_id: "6",
        option_text: "Yes",
      },
      {
        option_id: "7",
        option_text: "No",
      },
      {
        option_id: "8",
        option_text: "Not Sure",
      },
    ],
  },
  {
    question_id: "9",
    question_text:
      "Please enter the email addresses of your partners to invite them to the platform. You may choose to ",
    question_type: "field",
    required: "0",
    options: [],
  },
  {
    question_id: "10",
    question_text: "What is your current status in Canada?",
    question_type: "dropdown",
    required: "1",
    options: [
      {
        option_id: "9",
        option_text: "Citizen",
      },
      {
        option_id: "10",
        option_text: "Visitor",
      },
    ],
  },
  {
    question_id: "11",
    question_text: "What property type are you interested in? ",
    question_type: "radio",
    required: "1",
    options: [
      {
        option_id: "11",
        option_text: "Residential",
      },
      {
        option_id: "12",
        option_text: "Investment",
      },
      {
        option_id: "13",
        option_text: "Not Sure",
      },
    ],
  },
  {
    question_id: "12",
    question_text: "How much are you willing to pay for the property? ",
    question_type: "dropdown",
    required: "1",
    options: [
      {
        option_id: "14",
        option_text: "100k - 300k",
      },
      {
        option_id: "15",
        option_text: "300k - 500k",
      },
      {
        option_id: "16",
        option_text: "500k - 1m",
      },
    ],
  },
  {
    question_id: "13",
    question_text: "How much down payment do you have?",
    question_type: "field",
    required: "1",
    options: [],
  },
  {
    question_id: "14",
    question_text:
      "What is your preferred locations? Currently we are only serving the region of Ontario. ",
    question_type: "field",
    required: "1",
    options: [],
  },
  {
    question_id: "15",
    question_text: "When are you looking to buy a property? ",
    question_type: "dropdown",
    required: "1",
    options: [
      {
        option_id: "17",
        option_text: "0 - 30days",
      },
      {
        option_id: "18",
        option_text: "1month - 3months",
      },
    ],
  },
];

export default schema;
