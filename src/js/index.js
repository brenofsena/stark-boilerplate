import '../sass/style.scss'
import * as offline from 'offline-plugin/runtime';

offline.install({
  onUpdateReady: () => offline.applyUpdate()
});
