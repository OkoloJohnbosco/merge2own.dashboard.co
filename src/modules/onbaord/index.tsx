import CustomInput from "@/components/input";
import Section from "@/components/section";
import {
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function OnboardingPage() {
  const [value, setValue] = React.useState("1");

  return (
    <Stack spacing={10} pb={10}>
      <Stack py={6} borderBottom="1px solid" borderColor="gray.200">
        <Section textAlign="center">
          <Text>Onboarding</Text>
          <Heading>Getting to know you more.</Heading>
        </Section>
      </Stack>
      <Stack>
        <Section spacing={7}>
          {/* Question 1 */}
          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 1</Heading>
            <Text>Are you a first-time home buyer?</Text>
            <RadioGroup size="sm" onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">Buyer</Radio>
                <Radio value="2">Investor</Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          {/* Question 2 */}
          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 2</Heading>
            <Text>
              Please enter your phone number if you didn’t add it during account
              creation.
            </Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="phone number"
                placeholder="user@gmail.com"
              />
            </Stack>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 3</Heading>
            <Text>Are you open to a partnership?</Text>
            <RadioGroup size="sm" onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="2">No</Radio>
                <Radio value="2">Not sure</Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          {/* Question 4 */}
          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 4</Heading>
            <Text>Do you already have partners?</Text>
            <RadioGroup size="sm" onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="2">No</Radio>
                <Radio value="2">Not sure</Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 5</Heading>
            <Text>
              Please enter the email addresses of your partners to invite them
              to the platform. You may choose to skip this question for now and
              fill this out later.
            </Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="email"
                placeholder="user@gmail.com"
              />
            </Stack>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 6</Heading>
            <Text>What is your current status in Canada?</Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="status in canada"
                placeholder="Citizen"
              />
            </Stack>
          </Stack>

          {/* Question 7 */}
          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 7</Heading>
            <Text>What property type are you interested in?</Text>
            <RadioGroup size="sm" onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">Residential</Radio>
                <Radio value="2">Investment</Radio>
                <Radio value="2">Not sure</Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 8</Heading>
            <Text>How muuch are you willing to page for the property?</Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="willingness to page"
                placeholder="100k - 300k"
              />
            </Stack>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 9</Heading>
            <Text>How much down payment do you have?</Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="Enter a number in canadian dollars"
                placeholder="100,633"
              />
            </Stack>
          </Stack>

          <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
            <Heading fontSize="sm">Question 10</Heading>
            <Text>
              What is your preferred locations? Currently we are only serving
              the region of Ontario.
            </Text>
            <Stack maxW="300px">
              <CustomInput
                name="email"
                label="Enter location separated by comma"
                placeholder="waterloo, toronto"
              />
            </Stack>
          </Stack>
          <Stack spacing={10}>
            <Stack>
              <Heading fontSize="sm">
                Please review the consent clause before you sign and submit this
                form.
              </Heading>
              <Button
                w="fit-content"
                variant="link"
                size="sm"
                colorScheme="green"
              >
                Consent clause
              </Button>
            </Stack>
            <Stack w="fit-content" spacing={4}>
              <Text>
                By signing this form, you accept the terms of use and privacy
                policy.
              </Text>
              <CustomInput
                name="name"
                label="Please enter your initials or spell out your full name"
                placeholder="Joe Anderson"
              />
              <CustomInput
                name="date"
                label="Date"
                placeholder=""
                type="date"
              />
              <Button
                variant="primary"
                w="full"
                // type="submit"
              >
                Submit form
              </Button>
            </Stack>
          </Stack>
        </Section>
      </Stack>
    </Stack>
  );
}

export default OnboardingPage;
