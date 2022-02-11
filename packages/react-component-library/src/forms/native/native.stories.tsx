import { isBefore, isValid, parseISO } from 'date-fns'
import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import {
  AutocompleteE,
  AutocompleteEOption,
} from '../../components/AutocompleteE'
import { CheckboxE } from '../../components/CheckboxE'
import { DatePickerE } from '../../components/DatePickerE'
import { NumberInputE } from '../../components/NumberInputE'
import { SelectE, SelectEOption } from '../../components/SelectE'
import { SwitchE, SwitchEOption } from '../../components/SwitchE'
import { RangeSliderE } from '../../components/RangeSliderE'
import { ButtonE } from '../../components/ButtonE'
import { Fieldset } from '../../components/Fieldset'
import { useNativeForm } from './useNativeForm'
import { Field } from '../../components/Field'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleRadio: string[]
  exampleSwitch: string
  exampleNumberInput: number | null
  exampleDatePicker: Date | null
  exampleSelect: string | null
  exampleAutocomplete: string | null
  exampleRangeSlider: readonly [number]
}

const MINIMUM_DATE = parseISO('2022-01-01')

export const Example: React.FC<unknown> = () => {
  const {
    formErrors,
    formPayload,
    formState,
    handleChange,
    handleCheckboxGroup,
    handleRadioGroup,
    isSubmitting,
    onSubmit,
  } = useNativeForm<FormValues>(
    {
      email: '',
      password: '',
      description: '',
      exampleCheckbox: [],
      exampleRadio: [],
      exampleSwitch: '',
      exampleNumberInput: null,
      exampleDatePicker: null,
      exampleSelect: null,
      exampleAutocomplete: null,
      exampleRangeSlider: [20],
    },
    {
      email: true,
      // ...
    },
    {
      email: (value: string): boolean => !value,
      exampleDatePicker: (value) => {
        if (value && !isValid(value)) {
          return 'Enter a valid date'
        }

        if (value && isBefore(value, MINIMUM_DATE)) {
          return 'Enter a date on or after 1 January 2022'
        }

        return false
      },
      // ...
    }
  )

  return (
    <main>
      <form onSubmit={onSubmit}>
        <Field
          hintText="Example hint text."
          errors={[{ error: formErrors.email && 'Required' }]}
        >
          <TextInputE
            type="email"
            name="email"
            label="Email"
            value={formState.email}
            onChange={handleChange}
            data-testid="form-example-TextInputE-email"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextInputE
            type="password"
            name="password"
            label="Password"
            value={formState.password}
            onChange={handleChange}
            data-testid="form-example-TextInputE-password"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextAreaE
            name="description"
            label="Description"
            value={formState.description}
            onChange={handleChange}
            data-testid="form-example-TextAreaE-description"
          />
        </Field>
        <Fieldset>
          <legend>Example checkbox selection</legend>
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 1"
            value="Option 1"
          />
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 2"
            value="Option 2"
          />
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 3"
            value="Option 3"
          />
        </Fieldset>
        <Fieldset>
          <legend>Example radio selection</legend>
          <RadioE
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 1"
            value="Option 1"
          />
          <RadioE
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 2"
            value="Option 2"
          />
        </Fieldset>
        <Field hintText="Example hint text.">
          <SwitchE
            name="exampleSwitch"
            label="Example switch selection"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleChange({
                currentTarget: {
                  name: 'exampleSwitch',
                  value: e.currentTarget.value,
                },
              })
            }
            value={formState.exampleSwitch}
            data-testid="form-example-SwitchE"
          >
            <SwitchEOption label="One" value="1" />
            <SwitchEOption label="Two" value="2" />
            <SwitchEOption label="Three" value="3" />
          </SwitchE>
        </Field>
        <Field hintText="Example hint text.">
          <NumberInputE
            name="exampleNumberInput"
            label="Example number input"
            onChange={(
              _:
                | React.ChangeEvent<HTMLInputElement>
                | React.MouseEvent<HTMLButtonElement>,
              newValue: number | null
            ) => {
              handleChange({
                currentTarget: {
                  name: 'exampleNumberInput',
                  value: newValue,
                },
              })
            }}
            value={formState.exampleNumberInput}
            data-testid="form-example-NumberInputE"
          />
        </Field>
        <Field
          hintText="Example hint text."
          errors={[{ error: formErrors.exampleDatePicker }]}
        >
          <DatePickerE
            disabledDays={{ before: MINIMUM_DATE }}
            onChange={({ startDate }) => {
              handleChange({
                currentTarget: {
                  name: 'exampleDatePicker',
                  value: startDate,
                },
              })
            }}
            startDate={formState.exampleDatePicker}
          />
        </Field>
        <Field hintText="Example hint text.">
          <SelectE
            label="Example select"
            onChange={(value) => {
              handleChange({
                currentTarget: {
                  name: 'exampleSelect',
                  value,
                },
              })
            }}
            value={formState.exampleSelect}
          >
            <SelectEOption value="one">One</SelectEOption>
            <SelectEOption value="two">Two</SelectEOption>
            <SelectEOption value="three">Three</SelectEOption>
            <SelectEOption value="four">Four</SelectEOption>
          </SelectE>
        </Field>
        <Field hintText="Example hint text.">
          <AutocompleteE
            label="Example autocomplete"
            onChange={(value) => {
              handleChange({
                currentTarget: {
                  name: 'exampleAutocomplete',
                  value,
                },
              })
            }}
            value={formState.exampleAutocomplete}
          >
            <AutocompleteEOption value="one">One</AutocompleteEOption>
            <AutocompleteEOption value="two">Two</AutocompleteEOption>
            <AutocompleteEOption value="three">Three</AutocompleteEOption>
            <AutocompleteEOption value="four">Four</AutocompleteEOption>
          </AutocompleteE>
        </Field>
        <Field hintText="Example hint text.">
          <RangeSliderE
            onChange={(values: ReadonlyArray<number>) => {
              handleChange({
                currentTarget: {
                  name: 'exampleRangeSlider',
                  value: values as [],
                },
              })
            }}
            values={formState.exampleRangeSlider}
            domain={[0, 40]}
            mode={1}
            tracksLeft
            step={2}
          />
        </Field>
        <ButtonE
          type="submit"
          data-testid="form-example-submit"
          isDisabled={isSubmitting}
        >
          Submit
        </ButtonE>
      </form>

      <pre data-testid="form-example-values">
        {JSON.stringify(formPayload, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Native',
  component: Example,
} as ComponentMeta<typeof Example>
