import config from './knip'
import type { KnipConfig } from 'knip'


export default <KnipConfig>{
  ...config,
  rules: {
    // unable to find references to this file
    files: 'error',
    // unable to find references to this dependency
    dependencies: 'error',
    // unable to find references to this devDependency
    devDependencies: 'error',
    // used dependencies not listed in package.json
    unlisted: 'error',
    // binaries from deps not listed in package.json
    binaries: 'error',
    // unable to resolve this (import) specifier
    unresolved: 'error',
    // unable to find references to this export
    exports: 'error',
    // unable to find direct references to this export
    nsExports: 'error',
    // unable to find references to this exported type
    types: 'error',
    // unable to find direct references to this export
    nsTypes: 'error',
    // unable to find references to this enum member
    enumMembers: 'error',
    // unable to find references to this class member
    classMembers: 'error',
    // the same thing is exported more than once
    duplicates: 'error'
  }
}
