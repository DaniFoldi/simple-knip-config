import type { KnipConfig } from 'knip'


export default <KnipConfig>{
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
    exports: 'warn',
    // unable to find direct references to this export
    nsExports: 'warn',
    // unable to find references to this exported type
    types: 'warn',
    // unable to find direct references to this export
    nsTypes: 'warn',
    // unable to find references to this enum member
    enumMembers: 'warn',
    // unable to find references to this class member
    classMembers: 'warn',
    // the same thing is exported more than once
    duplicates: 'error'
  },
  compilers: {
    astro: text => /---\n([\S\s]*?)\n---/.exec(text)?.[1] ?? '',
    css: text => [ ...text.matchAll(/(?<=@)(import)[^;]+/g) ].join('\n'),
    scss: text => [ ...text.matchAll(/(?<=@)(import|use)[^;]+/g) ].join('\n'),
    mdx: text => [ ...text.matchAll(/import[^\n;]+/g) ].join('\n'),
    vue: text => [ ...text.matchAll(/<script\b[^>]*>([\S\s]*?)<\/script>/gm) ].join('\n')
  }
}
