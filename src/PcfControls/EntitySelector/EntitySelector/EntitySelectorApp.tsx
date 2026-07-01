import * as React from 'react';
import { Label } from '@fluentui/react-components';

export interface IEntitySelectorAppProps {
  name?: string;
}

export class EntitySelectorApp extends React.Component<IEntitySelectorAppProps> {
  public render(): React.ReactNode {
    return (
      <Label>
        Hello {this.props.name}!
      </Label>
    )
  }
}
