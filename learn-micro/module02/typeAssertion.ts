let assert: unknown = 10;

assert = 'palabra';

if (typeof assert === 'string') {
  console.log((assert as string).toUpperCase());
} else {
  console.log('Error - A string was expected here');
}
