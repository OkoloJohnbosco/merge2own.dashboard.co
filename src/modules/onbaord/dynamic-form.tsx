import CustomInput from "@/components/input";
import CustomRadio from "@/components/input/custom-radio";
import CustomSelect from "@/components/input/select";
import Section from "@/components/section";
import { transformSchema } from "@/lib/utils/component.utils";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import schema from "./schema";

const DynamicForm = ({ questionData }: { questionData: typeof schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    const question_responses = transformSchema(questionData)
      .map((field) => ({
        ...field,
        question_answer: data[field.key],
      }))
      .map((field) => ({
        question_id: field.question_id,
        question_answer: field.question_answer,
      }));
  };

  const renderFormControl = (key, field) => {
    switch (field.question_type) {
      case "field":
        return (
          <Stack
            pb={6}
            key={key}
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            <Heading fontSize="sm">Question {field.position}</Heading>
            <Text>{field.question_text}</Text>
            <Stack maxW="300px" pt={2}>
              <CustomInput
                // label={field.question_type}
                {...register(key, { required: "answer is required" })}
                errors={errors}
                placeholder="fill in the field"
              />
            </Stack>
          </Stack>
        );
      case "dropdown":
        return (
          <Stack
            pb={6}
            key={key}
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            <Heading fontSize="sm">Question {field.position}</Heading>
            <Text>{field.question_text}</Text>
            <Stack maxW="300px" pt={2}>
              <CustomSelect
                placeholder="fill in the field"
                // label={field.question_type}
                {...register(key, { required: "answer is required" })}
                errors={errors}
                options={field.options.map((item) => ({
                  label: item.option_text,
                  value: item.option_text,
                }))}
              />
            </Stack>
          </Stack>
        );
      case "radio":
        return (
          <div key={key}>
            <Stack pb={6} borderBottom="1px solid" borderColor="gray.200">
              <Heading fontSize="sm">Question {field.position}</Heading>
              <Text>{field.question_text}</Text>
              <CustomRadio
                {...register(key, { required: "answer is required" })}
                ref={register(key, { required: "answer is required" }).ref}
                errors={errors}
                options={field.options.map((item) => ({
                  label: item.option_text,
                  value: item.option_id,
                }))}
                setValue={setValue}
                clearErrors={clearErrors}
              />
            </Stack>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section spacing={7}>
        {transformSchema(questionData).map((field) =>
          renderFormControl(field.key, field)
        )}
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
              {...register("name", { required: "name is required" })}
              errors={errors}
              label="Please enter your initials or spell out your full name"
              placeholder="Joe Anderson"
            />
            <CustomInput
              {...register("date", { required: "date is required" })}
              errors={errors}
              label="Date"
              placeholder=""
              type="date"
            />
            <Button variant="primary" mt={4} w="full" type="submit">
              Submit form
            </Button>
          </Stack>
        </Stack>
      </Section>
    </form>
  );
};

export default DynamicForm;
