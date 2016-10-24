(function () {

    describe('todoListService', function () {

        var todoListService;

        beforeEach(module('todoList'));

        beforeEach(inject(function(_todoListService_) {
            todoListService = _todoListService_;
        }));

        afterEach(function() {
            todoListService.list = [];
        });

        it('should be abble to add an item', function () {
            // Given
            expect(todoListService.list.length).toBe(0);
            // When
            todoListService.add("Banana");
            // Then
            expect(todoListService.list.length).toBe(1);
            expect(todoListService.list[0].content).toBe("Banana");
            expect(todoListService.list[0].checked).toBeFalsy("Make sure it is unchecked by default");
        });

        it('should be abble to remove an item', function () {
            // Given
            todoListService.add("Banana");
            todoListService.add("Orange");
            expect(todoListService.list.length).toBe(2);
            // When
            todoListService.remove("Orange");
            // Then
            expect(todoListService.list.length).toBe(1);
            expect(todoListService.list[0].content).toBe("Banana");

            // When
            todoListService.remove("Banana");
            // Then
            expect(todoListService.list.length).toBe(0);
        });

        it('should not break if we remove an unexisting element', function () {
            // Given
            todoListService.add("Banana");
            // When
            todoListService.remove("Orange");
            // Then
            expect(todoListService.list.length).toBe(1);
            expect(todoListService.list[0].content).toBe("Banana");
        });

    });

})();
