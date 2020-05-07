# HTTP Errors JS

The intent of this project is to generate errors that are suitable for
use in HTTP applications. They are provided in such a way that they
can be thrown without needing to know about the https status code at
the non HTTP level.

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

  - update the [generator/errors.tsv](generator/errors.tsv) file with
    new error.
  - Run `npm run generate`.
  - Run `npm run build` to finish up and create the dist files.

If everything proceeded properly, then you should find the new error
file was generated and also referenced in the index file.

## Contributions

Contributions and feedback are welcome. Please create a ticket first,
before contributing any code.

## License

This code is license using the [MIT license](https://opensource.org/licenses/MIT).