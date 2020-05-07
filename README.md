# HTTP Errors JS

The intent of this project is to generate errors that are suitable for
use in HTTP applications. They are provided in such a way that they
can be thrown without needing to know about the https status code at
the non HTTP level.

This had originally been something developed for my own projects, but
I decided to make some improvements and make it public.

Some additional goals:

  - avoid dependencies on other packages where possible
  - keep it simple
  - have all error types documented and easily discoverable

It is possible that multiple errors result in the same HTTP error code,
which is fine, if this makes the error condition clearer in the code.

Note, a number of the initial error types were inspired by those in
[restify-error](https://www.npmjs.com/package/restify-errors). It may be
worth considering that project, if you see limitations or design
decisions you don't like here - though feedback is always appreciated.

## Example Usage

An example use is in an express project:

```ts
import { Request, Response, NextFunction } from 'express';
import { NotFoundError }  from 'http-errors-js';

function handleGet(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotFoundError('Could not find resource');
  } catch (error) {
      next(error);
  }
}
```

Then with an express error handler:

```ts
import { Request, Response, NextFunction } from 'express';

function handleError(error: Error, req: Request, res: Response, next: NextFunction) {
  let httpStatus = 500;
  let message = error.message;

  if ((error as any).httpStatusCode) {
    httpStatus = (error as any).httpStatusCode;
    message = error.message;
  }

  res.status(httpStatus).json({
    status: httpStatus,
    message: message
  });
}

app.use(handleError);
```

Note, while the example are in Typescript, this work in plain old
Javscript too, just without the types.

## Adding New Errors

To add a new error type:

  - update the [errors.tsv](generator/data/errors.tsv) file in the
    generator with new error.
  - Run `npm run generate`.
  - Run `npm run build` to finish up and create the dist files.

If everything proceeded properly, then you should find the new error
file was generated and also referenced in the index file.

## Contributions

Contributions and feedback are welcome. Please create a ticket first,
before contributing any code.

## License

This code is license using the [MIT license](https://opensource.org/licenses/MIT).