import buble from 'rollup-plugin-buble'

export default {
  entry: 'test/collection_spec.js',
  plugins: [buble()],
  format: 'cjs',
  dest: 'build/test-bundle.js'
}
