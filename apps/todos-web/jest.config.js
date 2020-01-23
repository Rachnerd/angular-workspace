module.exports = {
  name: 'todos-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todos-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
