import BreadcrumbsService from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

interface BreadcrumbsItemComponentSignature {
  Blocks: {
    default: [linkClass?: string];
  };
  Element: HTMLLIElement;
}

export default class BreadcrumbsItemComponent extends Component<BreadcrumbsItemComponentSignature> {
  @service('breadcrumbs') declare breadcrumbsService: BreadcrumbsService;
}
