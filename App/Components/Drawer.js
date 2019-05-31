import * as React from 'react';
import { Drawer } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    active: 'first',
  };

  render() {
    const { active } = this.state;

    return (
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
        />
     </Drawer.Section>
    );
  }
}