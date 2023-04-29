import { CalculatorWithLogService } from "./calculator-with-log.service";


describe('CalculatorWithLogService', () => {

  let mockLoggerService: any;
  let calculator: CalculatorWithLogService;

  beforeEach(() => {
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorWithLogService(mockLoggerService);
  })

  it('should add two numbers', () => {
    console.log('calling add');
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('calling subtract');
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
})