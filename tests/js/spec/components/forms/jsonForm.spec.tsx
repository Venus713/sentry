import React from 'react';

import {mountWithTheme} from 'sentry-test/enzyme';

import JsonForm from 'app/views/settings/components/forms/jsonForm';
import accountDetailsFields from 'app/data/forms/accountDetails';

// @ts-ignore
const user = TestStubs.User({});

describe('JsonForm', function() {
  it('renders with Form', function() {
    const wrapper = mountWithTheme(
      <JsonForm forms={accountDetailsFields} additionalFieldProps={{user}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
