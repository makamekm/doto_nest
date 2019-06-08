import child_process from 'child_process';
import chokidar from 'chokidar';

export const restartProcess = () => {
  child_process.spawn(process.argv[1], process.argv.slice(2), {
    detached: true,
    stdio: ['inherit'],
  }).unref();
  process.exit();
};

chokidar.watch('api/**/*').on('change', (event, path) => {
  console.log(event, path);
  // process.exit();
  // restartProcess();
});
